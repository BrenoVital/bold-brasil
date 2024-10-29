import { Button, Col, Dropdown } from "antd";
import TitleHeader from "../../shared/components/TitleHeader";
import CustomTable from "../../shared/components/Table";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { openNotification } from "../../shared/components/Notifications";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { companyService } from "../services";

export default function ExternalCompany() {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["company"],
    queryFn: () => companyService.getAll(),
  });
  const handleEdit = (id: string) => {
    navigate(`editar/${id}`);
  };
  const company = useMutation({
    mutationFn: (id: string) => companyService.remove(id),
    onSuccess() {
      openNotification("success", "Parceiro excluído com sucesso");
    },
    onError() {
      openNotification("error", "Erro ao excluir parceiro");
    },
  });

  const handleDelete = (id: string) => {
    company.mutate(id);
  };

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
                label: "Excluir",
                icon: <DeleteOutlined />,
                onClick: () => handleDelete(record.id),
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
