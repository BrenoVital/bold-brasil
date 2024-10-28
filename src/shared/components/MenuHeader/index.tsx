import { LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Row, Tooltip, Divider } from "antd";
import { useState } from "react";
import { MenuItems } from "../../../data/constants/MenuItems";
import { useNavigate } from "react-router-dom";

export default function MenuHeader() {
  const [current, setCurrent] = useState("Geral");
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    navigate(`/atendimento/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <>
      <Row justify="space-between" align="middle">
        <Col span={18}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={MenuItems}
            style={{ width: "100%" }}
          />
        </Col>
        <Col span={6}>
          <Row align="middle" justify="end" gutter={8}>
            <Col>
              <Button icon={<SearchOutlined />}>Drogaria do Bairro LTDA</Button>
            </Col>
            <Col>
              <Tooltip title="Atender">
                <Button icon={<LogoutOutlined />} />
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider style={{ marginTop: 0 }} />
    </>
  );
}
