import { Button, Col, Dropdown, Popconfirm } from "antd";
import TitleHeader from "../../shared/components/TitleHeader";
import CustomTable from "../../shared/components/Table";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { openNotification } from "../../shared/components/Notifications";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { companyService } from "../services";
import { useEffect } from "react";

export default function ExternalCompany() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, refetch } = useQuery({
    queryKey: ["company"],
    queryFn: () => companyService.getAll(),
  });

  const company = useMutation({
    mutationFn: (id: string) => companyService.remove(id),
    onSuccess() {
      openNotification("success", "Empresa excluída com sucesso");
      refetch();
    },
    onError() {
      openNotification("error", "Erro ao excluir empresa");
    },
  });

  const handleEdit = (id: string) => {
    navigate(`editar/${id}`);
  };

  const handleDelete = (id: string) => {
    company.mutate(id);
  };

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  const columns = [
    {
      id: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Nome empresa",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Ativa",
      dataIndex: "isActive",
      key: "isActive",
    },
    {
      title: "Colaboradores",
      dataIndex: "collaboratorsCount",
      key: "collaboratorsCount",
    },
    {
      title: "Último envio",
      dataIndex: "lastSubmit",
      key: "lastSubmit",
      render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    },
    {
      title: "Criado em",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    },
    {
      title: "Ações",
      key: "acoes",
      render: (_: any, record: any) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "edit",
                label: "Editar",
                icon: <EditOutlined />,
                onClick: () => handleEdit(record.id),
              },
              {
                key: "delete",
                label: (
                  <Popconfirm
                    title="Tem certeza que deseja excluir esta empresa?"
                    onConfirm={() => handleDelete(record.id)}
                    okText="Sim"
                    cancelText="Não"
                    onCancel={() => {}}
                  >
                    Excluir
                  </Popconfirm>
                ),
                icon: <DeleteOutlined />,
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <Col span={24}>
      <TitleHeader
        title="Empresas cadastradas"
        newButton
        route="criar"
        titleButon="Cadastrar Empresa"
      />
      <CustomTable columns={columns} data={data} />
    </Col>
  );
}
