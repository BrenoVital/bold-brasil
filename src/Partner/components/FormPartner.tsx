import { Form, Input, DatePicker, List, Button } from "antd";
import { Controller, UseFormReturn } from "react-hook-form";
import dayjs from "dayjs";
import { TPartner } from "../types/partner";
import {
  ContainerOutlined,
  DeleteOutlined,
  FundProjectionScreenOutlined,
  GithubOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

interface IPartnerForm {
  form: UseFormReturn<TPartner, any, undefined>;
}

export default function PartnerForm({ form }: IPartnerForm) {
  useEffect(() => {
    form.setValue("createdAt", dayjs().format("YYYY-MM-DD"));
  }, [form]);
  const [inputClient, setInputClient] = useState("");
  const [inputProject, setInputProject] = useState("");

  return (
    <Form layout="vertical">
      <Form.Item label="Data de Criação">
        <Controller
          name="createdAt"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <DatePicker
                value={dayjs(field.value) || null}
                format="DD/MM/YYYY"
                onChange={(date) => field.onChange(date)}
                disabled
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
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
                  max: 80,
                }}
                maxLength={80}
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
                maxLength={80}
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
                addonBefore={<GithubOutlined />}
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
                addonBefore={<ContainerOutlined />}
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
          render={({ field, fieldState }) => {
            return (
              <>
                <Input
                  count={{
                    show: true,
                    max: 40,
                  }}
                  maxLength={40}
                  placeholder="Digite o nome do cliente"
                  addonBefore={<IdcardOutlined />}
                  value={inputClient}
                  onChange={(e) => setInputClient(e.target.value)}
                  onPressEnter={() => {
                    if (inputClient.trim()) {
                      field.onChange([...field.value, inputClient.trim()]);
                      setInputClient("");
                    }
                  }}
                  suffix={
                    <Button
                      type="primary"
                      onClick={() => {
                        if (inputClient.trim()) {
                          field.onChange([...field.value, inputClient.trim()]);
                          setInputClient("");
                        }
                      }}
                    >
                      Adicionar
                    </Button>
                  }
                />
                {fieldState.error && (
                  <span style={{ color: "red" }}>
                    {fieldState.error.message}
                  </span>
                )}
                <List
                  size="small"
                  bordered
                  dataSource={field.value}
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
            );
          }}
        />
      </Form.Item>

      <Form.Item label="Projetos">
        <Controller
          name="projects"
          control={form.control}
          render={({ field, fieldState }) => {
            return (
              <>
                <Input
                  count={{
                    show: true,
                    max: 40,
                  }}
                  maxLength={40}
                  placeholder="Digite o nome do projeto"
                  addonBefore={<FundProjectionScreenOutlined />}
                  value={inputProject}
                  onChange={(e) => setInputProject(e.target.value)}
                  onPressEnter={() => {
                    if (inputProject.trim()) {
                      field.onChange([...field.value, inputProject.trim()]);
                      setInputProject("");
                    }
                  }}
                  suffix={
                    <Button
                      type="primary"
                      onClick={() => {
                        if (inputProject.trim()) {
                          field.onChange([...field.value, inputProject.trim()]);
                          setInputProject("");
                        }
                      }}
                    >
                      Adicionar
                    </Button>
                  }
                />
                {fieldState.error && (
                  <span style={{ color: "red" }}>
                    {fieldState.error.message}
                  </span>
                )}
                <List
                  size="small"
                  bordered
                  dataSource={field.value}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[
                        <Button
                          type="link"
                          onClick={() => {
                            const updatedProjects = form
                              .getValues("projects")
                              .filter((_, i) => i !== index);
                            field.onChange(updatedProjects);
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
            );
          }}
        />
      </Form.Item>
    </Form>
  );
}
