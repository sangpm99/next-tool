import api from "@/lib/axios";

import type { ProductCategory } from "@/types/productCategory.interface";

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const { data } = await api.get<ProductCategory[]>(
    "/ProductCategory/GetProductCategories"
  );
  return data;
};
