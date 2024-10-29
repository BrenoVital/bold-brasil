import { apiCompanies } from "../../shared/libs/axios";

export async function remove(id: string): Promise<void> {
  await apiCompanies.delete(`/external-companies/${id}`);
}
