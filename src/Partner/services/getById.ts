import { apiPartners } from "../../shared/libs/axios";

interface IGetById {
  id: string;
}

export const getById = async ({ id }: IGetById) => {
  const { data } = await apiPartners.get(`/test/partners/${id}`);
  return data;
};
