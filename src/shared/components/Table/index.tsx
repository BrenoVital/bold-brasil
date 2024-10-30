import { Table } from "antd";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface ITableProps {
  columns: any;
  data: any;
  valueDefault?: string;
}

export default function CustomTable({
  columns,
  data,
  valueDefault,
}: ITableProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (valueDefault) {
      setSearchParams({ ...searchParams, page: valueDefault });
    }
  }, [valueDefault]);

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
