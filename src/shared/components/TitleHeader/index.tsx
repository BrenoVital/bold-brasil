import { ArrowLeftOutlined } from "@ant-design/icons";
import { Typography, Button, Row, Space, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

interface ITitleHeaderProps {
  buttonBack?: boolean;
  title: string;
  newButton?: boolean;
  route?: string;
}
export default function TitleHeader({
  buttonBack,
  title,
  newButton,
  route,
}: ITitleHeaderProps) {
  const navigate = useNavigate();

  return (
    <Row justify="space-between" align="middle">
      <Space>
        {buttonBack && (
          <Tooltip title="voltar">
            <Button
              onClick={() => navigate(-1)}
              type="text"
              shape="default"
              icon={<ArrowLeftOutlined />}
            />
          </Tooltip>
        )}

        <Typography.Title level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
      </Space>
      {newButton && (
        <Button type="default" onClick={() => navigate(route || "/")}>
          Cadastrar parceiro
        </Button>
      )}
    </Row>
  );
}
