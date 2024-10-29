import { Form, Input, DatePicker, List } from "antd";
import { Controller, UseFormReturn } from "react-hook-form";
import dayjs from "dayjs";
import { TPartner } from "../../../data/types/partner";

interface IPartnerForm {
  form: UseFormReturn<TPartner, any, undefined>;
}

export default function PartnerForm({ form }: IPartnerForm) {
  return (
    <Form layout="vertical">
      <Form.Item label="Data de Criação">
        <Controller
          name="createdAt"
          control={form.control}
          render={({ field }) => (
            <DatePicker
              value={dayjs(field.value) || null}
              format="DD/MM/YYYY"
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </Form.Item>

      <Form.Item label="Nome" required>
        <Controller
          name="name"
          control={form.control}
          rules={{ required: "Nome é obrigatório." }}
          render={({ field, fieldState }) => (
            <>
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite o nome"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Descrição">
        <Controller
          name="description"
          control={form.control}
          render={({ field }) => (
            <Input.TextArea
              value={field.value}
              onChange={field.onChange}
              rows={4}
              placeholder="Digite a descrição"
            />
          )}
        />
      </Form.Item>

      <Form.Item label="Repositório Git">
        <Controller
          name="repositoryGit"
          control={form.control}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              placeholder="Digite a URL do repositório"
            />
          )}
        />
      </Form.Item>

      <Form.Item label="URL do Documento">
        <Controller
          name="urlDoc"
          control={form.control}
          render={({ field }) => (
            <Input
              value={field.value}
              onChange={field.onChange}
              placeholder="Digite a URL do documento"
            />
          )}
        />
      </Form.Item>

      <Form.Item label="Clientes">
        <Controller
          name="clients"
          control={form.control}
          render={({ field }) => (
            <>
              <Input
                placeholder="Digite os IDs dos clientes, separados por vírgula"
                onChange={(e) => {
                  const values = e.target.value
                    .split(",")
                    .map((item) => item.trim());
                  field.onChange(values);
                }}
              />
              <List
                size="small"
                bordered
                dataSource={form.getValues("clients")}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Projetos">
        <Controller
          name="projects"
          control={form.control}
          render={({ field }) => (
            <>
              <Input
                placeholder="Digite os IDs dos projetos, separados por vírgula"
                onChange={(e) => {
                  const values = e.target.value
                    .split(",")
                    .map((item) => item.trim());
                  field.onChange(values);
                }}
              />
              <List
                size="small"
                bordered
                dataSource={form.getValues("projects")}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </>
          )}
        />
      </Form.Item>
    </Form>
  );
}
