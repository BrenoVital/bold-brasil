import { apiCompanies } from "../../libs/axios";

export const getAll = async () => {
  const { data } = await apiCompanies.get(`/external-companies`);
  return data;
};
