import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button, Col, Popconfirm } from "antd";
import { useMutation } from "@tanstack/react-query";
import { openNotification } from "../../../shared/components/Notifications";
import TitleHeader from "../../../shared/components/TitleHeader";
import { TPartner } from "../../types/partner";
import FormPartner from "../../components/FormPartner";
import { partnerService } from "../../services";

const schemaCreatePartner = zod.object({
  name: zod.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  description: zod.string().min(3, "Descrição deve ter no mínimo 3 caracteres"),
  repositoryGit: zod.string().optional(),
  urlDoc: zod.string().optional(),
  clients: zod
    .array(zod.string().min(1, "Cada cliente deve ter caracteres válidos"))
    .nonempty("Clientes é obrigatório")
    .refine((clients) => clients.every((client) => client.trim() !== ""), {
      message: "Clientes não podem conter valores vazios ou apenas espaços.",
    }),
  projects: zod
    .array(zod.string().min(1, "Cada projeto deve ter caracteres válidos"))
    .nonempty("Projetos é obrigatório")
    .refine((projects) => projects.every((project) => project.trim() !== ""), {
      message: "Projetos não podem conter valores vazios ou apenas espaços.",
    }),
});

export default function NewPartner() {
  const form = useForm<TPartner>({
    resolver: zodResolver(schemaCreatePartner),
  });

  const createPartner = useMutation({
    mutationFn: (data: TPartner) => partnerService.create({ partner: data }),
    onSuccess: () => {
      openNotification("success", "Parceiro criado com sucesso");
      form.reset();
    },
    onError: () => {
      openNotification("error", "Erro ao criar parceiro");
    },
  });

  const onSubmit = (data: TPartner) => {
    createPartner.mutate(data);
  };

  return (
    <Col span={24}>
      <TitleHeader
        title="Novo Parceiro"
        buttonBack
        titleButon="Cadastrar Parceiro"
      />
      <FormPartner form={form} />
      <Popconfirm
        title="Deseja realmente salvar?"
        onConfirm={form.handleSubmit(onSubmit)}
        okText="Sim"
        cancelText="Não"
      >
        <Button type="primary">Salvar</Button>
      </Popconfirm>
    </Col>
  );
}
