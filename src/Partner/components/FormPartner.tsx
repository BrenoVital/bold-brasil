import { Form, Input, DatePicker, List, Button } from "antd";
import { Controller, UseFormReturn } from "react-hook-form";
import dayjs from "dayjs";
import { TPartner } from "../types/partner";
import { DeleteOutlined } from "@ant-design/icons";

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
                count={{
                  show: true,
                  max: 20,
                }}
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
          render={({ field, fieldState }) => (
            <>
              <Input.TextArea
                count={{
                  show: true,
                  max: 80,
                }}
                value={field.value}
                onChange={field.onChange}
                rows={2}
                placeholder="Digite a descrição"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Repositório Git">
        <Controller
          name="repositoryGit"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                addonBefore="URL"
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite a URL do repositório"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="URL do Documento">
        <Controller
          name="urlDoc"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                addonBefore="URL"
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite a URL do documento"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Clientes">
        <Controller
          name="clients"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                placeholder="Digite os IDs dos clientes, separados por vírgula"
                addonBefore="ID"
                count={{
                  show: true,
                  max: 80,
                }}
                onChange={(e) => {
                  const values = e.target.value
                    .split(",")
                    .map((item) => item.trim());
                  field.onChange(values);
                }}
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
              <List
                size="small"
                bordered
                dataSource={form.getValues("clients")}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <Button
                        type="link"
                        onClick={() => {
                          const updatedClients = form
                            .getValues("clients")
                            .filter((_, i) => i !== index);
                          field.onChange(updatedClients);
                        }}
                      >
                        <DeleteOutlined />
                      </Button>,
                    ]}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </>
          )}
        />
      </Form.Item>

      <Form.Item label="Projetos">
        <Controller
          name="projects"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                placeholder="Digite os IDs dos projetos, separados por vírgula"
                addonBefore="ID"
                count={{
                  show: true,
                  max: 80,
                }}
                onChange={(e) => {
                  const values = e.target.value
                    .split(",")
                    .map((item) => item.trim());
                  field.onChange(values);
                }}
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
              <List
                size="small"
                bordered
                dataSource={form.getValues("projects")}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[
                      <Button
                        type="link"
                        onClick={() => {
                          const updatedClients = form
                            .getValues("projects")
                            .filter((_, i) => i !== index);
                          field.onChange(updatedClients);
                        }}
                      >
                        <DeleteOutlined />
                      </Button>,
                    ]}
                  >
                    {item}
                  </List.Item>
                )}
              />
            </>
          )}
        />
      </Form.Item>
    </Form>
  );
}
