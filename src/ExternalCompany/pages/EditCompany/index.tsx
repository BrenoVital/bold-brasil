import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { openNotification } from "../../../shared/components/Notifications";
import { useEffect } from "react";
import { Button, Col, Spin } from "antd";
import TitleHeader from "../../../shared/components/TitleHeader";
import ModalConfirm from "../../../shared/components/PopConfirm";
import { TCompany } from "../../types/company";
import FormCompany from "../../components/FormCompany";
import { companyService } from "../../services";

export default function EditCompany() {
  const { id } = useParams();
  const form = useForm<TCompany>({});
  const companyData = useQuery({
    queryKey: ["company", id!],
    queryFn: () => companyService.getById({ id: id! }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: TCompany) =>
      companyService.update({ id: id!, company: data }),
    onSuccess: () => {
      openNotification("success", "Empresa atualizado com sucesso");
      setTimeout(() => {
        window.location.href = "/empresas";
      }, 1000);
    },
    onError: () => {
      openNotification("error", "Erro ao atualizar empresa");
    },
  });

  useEffect(() => {
    if (companyData.data)
      form.reset({
        ...companyData.data,
      });
  }, [form, companyData.data]);

  const onSubmit = (data: TCompany) => {
    mutate(data);
  };

  if (companyData.isLoading)
    return (
      <Spin size="large" style={{ display: "block", margin: "30vh auto" }} />
    );

  return (
    <Col span={24}>
      <TitleHeader title="Editar Empresa" buttonBack />
      <FormCompany form={form} />
      <ModalConfirm
        title="Deseja realmente editar?"
        description="Ao confirmar as alterações, a empresa será atualizada."
        confirm={() => form.handleSubmit(onSubmit)()}
        cancel={() => {
          window.location.href = "/empresas";
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
