import { TCompany } from "../../../data/types/company";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { companyService } from "../../../data/services/company";
import { useMutation } from "@tanstack/react-query";
import { openNotification } from "../../../shared/components/Notifications";
import { Button, Col } from "antd";
import TitleHeader from "../../../shared/components/TitleHeader";
import FormCompany from "../components/FormCompany";

const schemaCreateCompany = zod.object({
  companyName: zod.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  collaboratorsCount: zod
    .number()
    .min(1, "Número de colaboradores deve ser maior que 0"),
  isActive: zod.boolean(),
  lastSubmit: zod.string().optional(),
  createdAt: zod.string().optional(),
});

export default function NewCompany() {
  const form = useForm<TCompany>({
    resolver: zodResolver(schemaCreateCompany),
  });

  const createCompany = useMutation({
    mutationFn: (data: TCompany) => companyService.create({ company: data }),
    onSuccess: () => {
      openNotification("success", "Parceiro criado com sucesso");
    },
    onError: () => {
      openNotification("error", "Erro ao criar parceiro");
    },
  });

  const onSubmit = (data: TCompany) => {
    console.log(data);
    createCompany.mutate(data);
  };

  return (
    <Col span={24}>
      <TitleHeader
        title="Nova empresa"
        buttonBack
        titleButon="Cadastrar Empresa"
      />
      <FormCompany form={form} />
      <Button type="primary" onClick={form.handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </Col>
  );
}
