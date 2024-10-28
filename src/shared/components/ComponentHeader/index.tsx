import { SearchOutlined, ControlOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Tooltip } from "antd";

interface IHeaderProps {
  showSearch?: boolean;
  showService?: boolean;
}

export default function ComponentHeader({
  showSearch,
  showService,
}: IHeaderProps) {
  return (
    <Row align="middle" justify="space-between" style={{ width: "100%" }}>
      {showSearch && (
        <Col flex="0 1 40%">
          <Input
            placeholder="Buscar"
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="filtros">
                <Button icon={<ControlOutlined />} />
              </Tooltip>
            }
            size="middle"
          />
        </Col>
      )}

      {showService && (
        <Col flex="0 1 55%" style={{ textAlign: "right" }}>
          <Button size="large">Novo atendimento</Button>
        </Col>
      )}
    </Row>
  );
}
