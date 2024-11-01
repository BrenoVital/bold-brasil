import { Table } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface ITableProps {
  columns: any;
  data: any;
}

export default function CustomTable({ columns, data }: ITableProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const pageFromParams = Number(searchParams.get("page")) || 1;
    if (pageFromParams !== currentPage) {
      setCurrentPage(pageFromParams);
    }
  }, [searchParams, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
  };

  return (
    <Table
      style={{ marginTop: 20 }}
      tableLayout="fixed"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 10,
        current: currentPage,
        onChange: handlePageChange,
      }}
    />
  );
}
