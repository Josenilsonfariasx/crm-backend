import { NextFunction, Request, Response } from "express";
import redisClient from "../utils/redisClient";

export const isCache = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cacheData = await redisClient.get(req.originalUrl);
    if (cacheData) {
      return res.status(200).json(JSON.parse(cacheData));
    }
    const originalSend = res.json;
    res.json = function (body) {
      redisClient.setEx(req.originalUrl, 1800, JSON.stringify(body));
      return originalSend.call(this, body);
    };
    next();
  } catch (error) {
    console.log("Redis error", error);
    next();
  }
};
