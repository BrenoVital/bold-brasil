import { apiCompanies } from "../../shared/libs/axios";

interface IGetById {
  id: string;
}

export const getById = async ({ id }: IGetById) => {
  const { data } = await apiCompanies.get(`/external-companies/${id}`);
  return data;
};
