import { Typography, Button, Row } from "antd";
import { useNavigate } from "react-router-dom";

interface ITitleHeaderProps {
  title: string;
  divider?: boolean;
}
export default function TitleHeader({ title }: ITitleHeaderProps) {
  const navigate = useNavigate();

  return (
    <Row justify="space-between" align="middle">
      <Typography.Title level={3}>{title}</Typography.Title>
      <Button type="primary" onClick={() => navigate("criar")}>
        Cadastrar parceiro
      </Button>
    </Row>
  );
}
