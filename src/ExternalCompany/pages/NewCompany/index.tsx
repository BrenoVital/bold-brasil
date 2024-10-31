import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useMutation } from "@tanstack/react-query";
import { openNotification } from "../../../shared/components/Notifications";
import { Button, Col, Popconfirm } from "antd";
import TitleHeader from "../../../shared/components/TitleHeader";
import { TCompany } from "../../types/company";
import FormCompany from "../../components/FormCompany";
import { companyService } from "../../services";

const schemaCreateCompany = zod.object({
  companyName: zod.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  collaboratorsCount: zod
    .string()
    .min(1, "Número de colaboradores deve ser maior que 0"),
  isActive: zod.boolean().optional(),
  lastSubmit: zod.string().optional(),
});

export default function NewCompany() {
  const form = useForm<TCompany>({
    defaultValues: {
      companyName: "",
      collaboratorsCount: "",
      isActive: true,
      lastSubmit: "",
    },
    resolver: zodResolver(schemaCreateCompany),
  });

  const createCompany = useMutation({
    mutationFn: (data: TCompany) => companyService.create({ company: data }),
    onSuccess: () => {
      openNotification("success", "Empresa cadastrada com sucesso");
      form.reset();
    },
    onError: () => {
      openNotification("error", "Erro ao cadastrar empresa");
    },
  });

  const onSubmit = (data: TCompany) => {
    const result = schemaCreateCompany.safeParse(data);
    if (!result.success) {
      console.error(result.error);
      return;
    }
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
      <Popconfirm
        title="Deseja realmente salvar?"
        onConfirm={form.handleSubmit(onSubmit)}
        okText="Sim"
        cancelText="Não"
      >
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Popconfirm>
    </Col>
  );
}
