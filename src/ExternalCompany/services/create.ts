import { apiCompanies } from "../../shared/libs/axios";
import { TCompany } from "../types/company";

interface createCompany {
  company: TCompany;
}
export const create = async ({ company }: createCompany) => {
  await apiCompanies.post(`/external-companies`, company);
};
