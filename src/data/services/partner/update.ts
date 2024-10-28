import { apiPartners } from "../../libs/axios";
import { TPartner } from "../../types/partner";

interface updatePartner {
  id: string;
  partner: TPartner;
}
export const update = async ({ id, partner }: updatePartner) => {
  await apiPartners.put(`/test/partners/${id}`, partner);
};
