import { Controller, UseFormReturn } from "react-hook-form";
import { Checkbox, DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";
import { TCompany } from "../types/company";

interface ICompanyForm {
  form: UseFormReturn<TCompany, any, undefined>;
}

export default function FormCompany({ form }: ICompanyForm) {
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
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
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
                count={{
                  show: true,
                  max: 20,
                }}
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
          render={({ field, fieldState }) => (
            <>
              <Input
                type="number"
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite o número de colaboradores"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>
      <Form.Item label="Ativo">
        <Controller
          name="isActive"
          control={form.control}
          render={({ field }) => (
            <>
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              >
                Empresa Ativa
              </Checkbox>
            </>
          )}
        />
      </Form.Item>
      <Form.Item label="Última atualização">
        <Controller
          name="lastSubmit"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <DatePicker
                value={dayjs(field.value) || null}
                format="DD/MM/YYYY"
                onChange={(date) =>
                  field.onChange(date ? date.format("YYYY-MM-DD") : "")
                }
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>
    </Form>
  );
}
