import { Button, Col, Dropdown, Modal, Popconfirm, Typography } from "antd";
import CustomTable from "../../shared/components/Table";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import TitleHeader from "../../shared/components/TitleHeader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { openNotification } from "../../shared/components/Notifications";
import { partnerService } from "../services";

export default function Partner() {
  const [descriptionReduced, setDescriptionReduced] = useState<any>(null);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data, refetch } = useQuery({
    queryKey: ["partners"],
    queryFn: () => partnerService.getAll(),
  });

  const partner = useMutation({
    mutationFn: (id: string) => partnerService.remove(id),
    onSuccess() {
      openNotification("success", "Parceiro excluído com sucesso");
      refetch();
    },
    onError() {
      openNotification("error", "Erro ao excluir parceiro");
    },
  });

  const openModal = (record: any) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const handleEdit = (id: string) => {
    navigate(`editar/${id}`);
  };

  const handleDelete = (id: string) => {
    partner.mutate(id);
  };

  const handleDescription = (description: string) => {
    if (description.length > 20) {
      setDescriptionReduced(description.slice(0, 20) + "...");
      return descriptionReduced;
    }
    return description;
  };

  const columns = [
    {
      id: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
      render: (description: string) => (
        <Typography.Text>{handleDescription(description)}</Typography.Text>
      ),
    },
    {
      title: "Repositório Git",
      dataIndex: "repositoryGit",
      key: "repositoryGit",
    },
    {
      title: "URL Doc",
      dataIndex: "urlDoc",
      key: "urlDoc",
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
                    title="Tem certeza que deseja excluir este parceiro?"
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
              {
                key: "view",
                label: "Visualizar",
                icon: <EyeOutlined />,
                onClick: () => openModal(record),
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

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: "1" });
    }
  }, [searchParams, setSearchParams]);

  return (
    <Col span={24}>
      <TitleHeader
        title="Parceiros cadastrados"
        newButton
        route="criar"
        titleButon="Cadastrar Parceiro"
      />
      <CustomTable columns={columns} data={data} />
      <Modal
        title="Detalhes do Parceiro"
        open={isModalOpen}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Fechar
          </Button>,
        ]}
      >
        {selectedRecord && (
          <Col span={24}>
            <Typography.Title level={4}>ID dos clientes</Typography.Title>
            <Typography.Paragraph>
              {selectedRecord.clients?.map((client: any, index: number) => (
                <Col key={index}>
                  <Typography.Text>ID: {client}</Typography.Text>
                </Col>
              ))}
            </Typography.Paragraph>
            <Typography.Title level={4}>ID dos projetos</Typography.Title>
            <Typography.Paragraph>
              {selectedRecord.projects?.map((project: any, index: number) => (
                <Col key={index}>
                  <Typography.Text>ID: {project}</Typography.Text>
                </Col>
              ))}
            </Typography.Paragraph>
          </Col>
        )}
      </Modal>
    </Col>
  );
}
