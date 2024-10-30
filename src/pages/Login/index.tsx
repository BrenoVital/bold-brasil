import { Button, Checkbox, Col, Form, Input, Popover, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import { TLogin } from "../../shared/types/login";
import { useAuthStore } from "../../shared/store/authStore";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const schemaLogin = zod.object({
  username: zod.string().min(3, "Usuário deve ter no mínimo 3 caracteres"),
  password: zod.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});
export default function Login() {
  const { login, isAuthenticated } = useAuthStore();
  const form = useForm<TLogin>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schemaLogin),
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(data: TLogin) {
    setLoading(true);
    const isAuthenticated = await login(data.username, data.password);

    if (!isAuthenticated) {
      setErrorMessage("Usuário ou senha inválidos!");
    } else {
      setErrorMessage("");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Col
      span={24}
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Form
        layout="vertical"
        name="basic"
        style={{
          width: 400,
          height: 400,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#fff",
          border: "1px solid #d9d9d9",
        }}
        initialValues={{ remember: true }}
        onFinish={form.handleSubmit((data) =>
          login(data.username, data.password)
        )}
        autoComplete="off"
      >
        <Typography.Title level={4} style={{ marginBottom: 10 }}>
          Login
        </Typography.Title>
        {errorMessage && (
          <Typography.Text type="danger" style={{ marginBottom: 10 }}>
            {errorMessage}
          </Typography.Text>
        )}
        <Form.Item
          style={{ width: "100%" }}
          label="Usuário"
          name="username"
          rules={[
            { required: true, message: "Por favor, digite seu usuário!" },
          ]}
        >
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  prefix={<UserOutlined />}
                  count={{
                    show: true,
                    max: 15,
                  }}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Digite seu usuário"
                />
                {fieldState.error && (
                  <span style={{ color: "red" }}>
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
        </Form.Item>

        <Form.Item
          style={{ width: "100%" }}
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Por favor, digite sua senha!" }]}
        >
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <Input.Password
                  prefix={<LockOutlined />}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Digite sua senha"
                />
                {fieldState.error && (
                  <span style={{ color: "red" }}>
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
        </Form.Item>

        <Form.Item
          style={{ width: "100%" }}
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Lembrar-me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Popover
            content={
              <div>
                <p>Senha: 123456</p>
              </div>
            }
            title="Credenciais de acesso"
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={form.handleSubmit(handleLogin)}
              loading={loading}
              style={{ padding: "0 40px" }}
            >
              Entrar
            </Button>
          </Popover>
        </Form.Item>
      </Form>
    </Col>
  );
}
