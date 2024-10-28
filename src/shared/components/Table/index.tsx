import { Avatar, Table } from "antd";

interface ITableProps {
  columns: any;
  data: any;
}

export default function CustomTable({ columns, data }: ITableProps) {
  const defaultColumns = [
    {
      title: "Código",
      dataIndex: "codigo",
      key: "codigo",
    },
    {
      title: "Usuário",
      dataIndex: "usuario",
      key: "usuario",
      render: (usuario: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={usuario.avatar} style={{ marginRight: 8 }} />
          <div>
            <div>{usuario.name}</div>
            <div style={{ color: "#999" }}>{usuario.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Documento",
      dataIndex: "documento",
      key: "documento",
    },
  ];

  const mergedColumns = [...defaultColumns, ...columns];

  return (
    <Table
      style={{ marginTop: 20 }}
      tableLayout="fixed"
      footer={() => "Total de registros 10"}
      columns={mergedColumns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
    />
  );
}
