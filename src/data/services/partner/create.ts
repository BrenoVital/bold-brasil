import { apiPartners } from "../../libs/axios";
import { TPartner } from "../../types/partner";

interface createPartner {
  partner: TPartner;
}
export const create = async ({ partner }: createPartner) => {
  await apiPartners.post(`/test/partners`, partner);
};
