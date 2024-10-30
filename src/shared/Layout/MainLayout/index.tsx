import {
  BookOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Col, Layout, Space, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuItems from "./components/MenuItems";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
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

  return (
    <Layout
      style={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 64,
            backgroundColor: "gray",
            margin: 10,
            borderRadius: 10,
          }}
        />
        <MenuItems routes={routes} />
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
            <Space
              size={24}
              onClick={() => console.log("click")}
              style={{ cursor: "pointer" }}
            >
              <Badge count={999}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </Space>
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
