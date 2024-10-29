import { Button, Col, Dropdown, Modal } from "antd";
import CustomTable from "../../shared/components/Table";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import TitleHeader from "../../shared/components/TitleHeader";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dayjs from "dayjs";
import { openNotification } from "../../shared/components/Notifications";
import { partnerService } from "../services";

export default function Partner() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const openModal = (record: any) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };
  const { data } = useQuery({
    queryKey: ["partners"],
    queryFn: () => partnerService.getAll(),
  });

  const handleEdit = (id: string) => {
    navigate(`editar/${id}`);
  };

  const partner = useMutation({
    mutationFn: (id: string) => partnerService.remove(id),
    onSuccess() {
      openNotification("success", "Parceiro excluído com sucesso");
    },
    onError() {
      openNotification("error", "Erro ao excluir parceiro");
    },
  });

  const handleDelete = (id: string) => {
    partner.mutate(id);
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
                label: "Excluir",
                icon: <DeleteOutlined />,
                onClick: () => handleDelete(record.id),
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
          <div>
            <h4>Clientes:</h4>
            <ul>
              {selectedRecord.clients?.map((client: any, index: number) => (
                <li key={index}>{client}</li>
              ))}
            </ul>
            <h4>Projetos:</h4>
            <ul>
              {selectedRecord.projects?.map((project: any, index: number) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </Col>
  );
}
