import { apiCompanies } from "../../libs/axios";

interface IGetAll {
  page: number;
  take: number;
}

export const getAll = async ({ page, take }: IGetAll) => {
  const { data } = await apiCompanies.get(`/external-companies`, {
    params: {
      page,
      take,
      offset: page * take,
    },
  });
  return data;
};
