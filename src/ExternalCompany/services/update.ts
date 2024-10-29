import { apiCompanies } from "../../shared/libs/axios";
import { TCompany } from "../types/company";

interface updateCompany {
  id: string;
  company: TCompany;
}
export const update = async ({ id, company }: updateCompany) => {
  await apiCompanies.put(`/external-companies/${id}`, company);
};
