import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button, Col } from "antd";
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
  clients: zod.array(zod.string()).nonempty("Clientes é obrigatório"),
  projects: zod.array(zod.string()).nonempty("Projetos é obrigatório"),
});

export default function NewPartner() {
  const form = useForm<TPartner>({
    resolver: zodResolver(schemaCreatePartner),
  });

  const createPartner = useMutation({
    mutationFn: (data: TPartner) => partnerService.create({ partner: data }),
    onSuccess: () => {
      openNotification("success", "Parceiro criado com sucesso");
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
      <Button type="primary" onClick={form.handleSubmit(onSubmit)}>
        Salvar
      </Button>
    </Col>
  );
}
