import { Col, Typography, Divider } from "antd";

interface ITitleHeaderProps {
  title: string;
  divider?: boolean;
}
export default function TitleHeader({ title, divider }: ITitleHeaderProps) {
  return (
    <Col span={24}>
      <Typography.Title level={3}>{title}</Typography.Title>
      {divider && (
        <Divider
          style={{
            margin: "10px 0",
          }}
        />
      )}
    </Col>
  );
}
