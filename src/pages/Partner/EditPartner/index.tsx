import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { TPartner } from "../../../data/types/partner";
import { Button, Col, Spin } from "antd";
import TitleHeader from "../../../shared/components/TitleHeader";
import FormPartner from "../components/FormPartner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { partnerService } from "../../../data/services/partner";
import { openNotification } from "../../../shared/components/Notifications";
import { useEffect } from "react";
import ModalConfirm from "../../../shared/components/PopConfirm";

export default function EditPartner() {
  const { id } = useParams();
  const form = useForm<TPartner>({});

  const partnerData = useQuery({
    queryKey: ["partner", id!],
    queryFn: () => partnerService.getById({ id: id! }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: TPartner) =>
      partnerService.update({ id: id!, partner: data }),
    onSuccess: () => {
      openNotification("success", "Parceiro atualizado com sucesso");
      setTimeout(() => {
        window.location.href = "/parceiros";
      }, 1000);
    },
    onError: () => {
      openNotification("error", "Erro ao atualizar parceiro");
    },
  });

  useEffect(() => {
    if (partnerData.data)
      form.reset({
        ...partnerData.data,
      });
  }, [form, partnerData.data]);

  const onSubmit = (data: TPartner) => {
    mutate(data);
  };

  if (partnerData.isLoading)
    return (
      <Spin size="large" style={{ display: "block", margin: "30vh auto" }} />
    );

  return (
    <Col span={24}>
      <TitleHeader title="Editar Parceiro" buttonBack />
      <FormPartner form={form} />
      <ModalConfirm
        title="Deseja realmente editar?"
        description="Ao confirmar as alterações, o parceiro será atualizado."
        confirm={() => form.handleSubmit(onSubmit)()}
        cancel={() => {
          window.location.href = "/parceiros";
        }}
        component={
          <Button
            type="primary"
            style={{ marginRight: 10 }}
            loading={isPending}
          >
            Salvar
          </Button>
        }
      />
    </Col>
  );
}
