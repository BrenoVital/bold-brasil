import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button, Col, Popconfirm, Spin } from "antd";
import TitleHeader from "../../../shared/components/TitleHeader";
import { useMutation, useQuery } from "@tanstack/react-query";
import { openNotification } from "../../../shared/components/Notifications";
import { useEffect } from "react";
import { TPartner } from "../../types/partner";
import FormPartner from "../../components/FormPartner";
import { partnerService } from "../../services";

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
      <Popconfirm
        title="Deseja realmente editar?"
        description="Ao confirmar as alterações, o parceiro será atualizado."
        onConfirm={form.handleSubmit(onSubmit)}
        onCancel={() => {
          window.location.href = "/parceiros";
        }}
        okText="Sim"
        cancelText="Não"
      >
        <Button type="primary" loading={isPending}>
          Salvar
        </Button>
      </Popconfirm>
    </Col>
  );
}
