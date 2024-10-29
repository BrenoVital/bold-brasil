import { apiPartners } from "../../shared/libs/axios";

export const getAll = async () => {
  const { data } = await apiPartners.get(`/test/partners`);
  return data;
};
