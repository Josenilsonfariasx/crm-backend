import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";

// Função para remover acentos
const removeAccents = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const SearchProductService = async (name?: string, minPrice?: number, maxPrice?: number) => {
  // Verifica se pelo menos um filtro foi fornecido
  if (!name && minPrice === undefined && maxPrice === undefined) {
    throw new AppError("Pelo menos um filtro deve ser fornecido: 'name', 'minPrice' ou 'maxPrice'.", 400);
  }

  const filters: any = {};

  if (name) {
    filters.name = {
      contains: removeAccents(name.toLowerCase()), // Removendo acentos e transformando para minúsculas
    };
  }

  if (minPrice !== undefined) {
    filters.price = {
      gte: minPrice,
    };
  }

  if (maxPrice !== undefined) {
    filters.price = {
      ...filters.price,
      lte: maxPrice,
    };
  }

  // Buscando todos os produtos e filtrando manualmente
  const products = await prismaClient.product.findMany();
  const filteredProducts = products.filter((product) => {
    const matchesName = name
      ? removeAccents(product.name.toLowerCase()).includes(removeAccents(name.toLowerCase()))
      : true;
    const matchesMinPrice = minPrice !== undefined ? product.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== undefined ? product.price <= maxPrice : true;

    return matchesName && matchesMinPrice && matchesMaxPrice;
  });

  return filteredProducts;
};
