import { apiCompanies } from "../../libs/axios";

interface IGetAll {
  nome?: string;
  page: number;
  take: number;
}

export const getAll = async ({ nome, page, take }: IGetAll) => {
  const { data } = await apiCompanies.get(`/external-companies`, {
    params: {
      nome,
      page,
      take,
      offset: page * take,
    },
  });
  return data;
};
