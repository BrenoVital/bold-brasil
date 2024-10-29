import { Controller, UseFormReturn } from "react-hook-form";
import { TCompany } from "../../../../data/types/company";
import { Checkbox, DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";

interface ICompanyForm {
  form: UseFormReturn<TCompany, any, undefined>;
}

export default function FormCompany({ form }: ICompanyForm) {
  return (
    <Form
      layout="vertical"
      onFinish={form.handleSubmit((data) => console.log(data))}
    >
      <Form.Item label="Data de Criação">
        <Controller
          name="createdAt"
          control={form.control}
          render={({ field }) => (
            <DatePicker
              value={field.value ? dayjs(field.value) : null}
              format="DD/MM/YYYY"
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Nome da Empresa" required>
        <Controller
          name="companyName"
          control={form.control}
          rules={{ required: "Nome da empresa é obrigatório." }}
          render={({ field, fieldState }) => (
            <>
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite o nome da empresa"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>
      <Form.Item label="Quantidade de Colaboradores">
        <Controller
          name="collaboratorsCount"
          control={form.control}
          render={({ field }) => (
            <Input
              type="number"
              value={field.value}
              onChange={field.onChange}
              placeholder="Digite o número de colaboradores"
            />
          )}
        />
      </Form.Item>
      <Form.Item label="Ativo">
        <Controller
          name="isActive"
          control={form.control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            >
              Empresa Ativa
            </Checkbox>
          )}
        />
      </Form.Item>
      <Form.Item label="Última atualização">
        <Controller
          name="lastSubmit"
          control={form.control}
          render={({ field }) => (
            <DatePicker
              value={field.value ? dayjs(field.value) : null}
              format="DD/MM/YYYY"
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </Form.Item>
    </Form>
  );
}
