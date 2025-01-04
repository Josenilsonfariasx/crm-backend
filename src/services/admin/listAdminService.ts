import prismaClient from "../../prisma";

export const listAdminService = async () => {
  const admins = await prismaClient.admin.findMany({
    select: {
      id: true,
      name: true,
      taxId: true,
      createdAt: true,
    },
  });

  return admins;
};
