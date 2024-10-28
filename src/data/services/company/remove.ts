import { apiCompanies } from "../../libs/axios";

export async function remove(id: string): Promise<void> {
  await apiCompanies.delete(`/external-companies/${id}`);
}
