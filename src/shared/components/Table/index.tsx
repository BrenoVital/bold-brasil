import { Table } from "antd";

interface ITableProps {
  columns: any;
  data: any;
}

export default function CustomTable({ columns, data }: ITableProps) {
  return (
    <Table
      style={{ marginTop: 20 }}
      tableLayout="fixed"
      footer={() => "Total de registros 10"}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
    />
  );
}
