import {
  BookOutlined,
  GithubOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Layout,
  List,
  Row,
  Space,
  theme,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuItems from "./components/MenuItems";
import { useAuthStore } from "../../store/authStore";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuthStore();
  const { Header, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const routes: any = {
    "/": { name: "Início", icon: <HomeOutlined /> },
    "/parceiros": { name: "Parceiros", icon: <UsergroupAddOutlined /> },
    "/empresas": { name: "Empresas", icon: <ShopOutlined /> },
    "/sobre": { name: "Sobre", icon: <BookOutlined /> },
  };

  const notifications = [
    { id: 1, message: "Nova mensagem de suporte" },
    { id: 2, message: "Atualização de política de privacidade" },
    { id: 3, message: "Novo parceiro adicionado" },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Row style={{ padding: 16 }} justify="center">
          <GithubOutlined
            style={{ fontSize: 32, color: "white" }}
            onClick={() =>
              window.open("https://github.com/BrenoVital", "_blank")
            }
          />
        </Row>
        <MenuItems routes={routes} />
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={logout}
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: "calc(100% - 40px)",
            color: "white",
          }}
        >
          Sair
        </Button>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col
            flex="1 1 200px"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Col>
          <Col flex="0 1 55px">
            <Dropdown
              overlayStyle={{ width: 300 }}
              menu={{
                items: [
                  {
                    key: "notifications",
                    label: (
                      <Space direction="vertical" style={{ width: "100%" }}>
                        {notifications.length > 0 ? (
                          <List
                            itemLayout="horizontal"
                            dataSource={notifications}
                            renderItem={(item) => (
                              <List.Item>
                                <List.Item.Meta
                                  title={item.message}
                                  description="Há 5 minutos"
                                />
                              </List.Item>
                            )}
                          />
                        ) : (
                          <p>Sem notificações</p>
                        )}
                      </Space>
                    ),
                    icon: (
                      <Badge count={notifications.length} dot>
                        <UserOutlined />
                      </Badge>
                    ),
                  },
                  {
                    key: "logout",
                    label: "Deslogar da conta",
                    icon: <LogoutOutlined />,
                    onClick: logout,
                  },
                ],
              }}
              trigger={["click"]}
            >
              <Space size={24} style={{ cursor: "pointer" }}>
                <Badge count={notifications.length}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
              </Space>
            </Dropdown>
          </Col>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "calc(99vh - 64px - 48px)",
            overflowY: "auto",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
