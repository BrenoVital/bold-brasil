import { apiPartners } from "../../shared/libs/axios";

export async function remove(id: string): Promise<void> {
  await apiPartners.delete(`/test/partners/${id}`);
}
