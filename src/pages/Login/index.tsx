import { Button, Checkbox, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { TLogin } from "../../shared/types/login";
import { useAuthStore } from "../../shared/store/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const form = useForm<TLogin>({});
  const { login, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  function handleLogin(data: TLogin) {
    login(data.username, data.password);
  }

  if (isAuthenticated) {
    navigate("/empresas");
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={form.handleSubmit((data) =>
        login(data.username, data.password)
      )}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Por favor, digite seu usuário!" }]}
      >
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite seu usuário"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Por favor, digite sua senha!" }]}
      >
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Input.Password
                value={field.value}
                onChange={field.onChange}
                placeholder="Digite sua senha"
              />
              {fieldState.error && (
                <span style={{ color: "red" }}>{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Lembrar-me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={form.handleSubmit(handleLogin)}
        >
          Acessar
        </Button>
      </Form.Item>
    </Form>
  );
}
