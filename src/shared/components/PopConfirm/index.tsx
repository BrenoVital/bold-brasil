import { Popconfirm } from "antd";

interface IModalConfirm {
  title: string;
  description: string;
  confirm: () => void;
  cancel: () => void;
  component?: React.ReactNode;
}
export default function ModalConfirm({
  title,
  description,
  confirm,
  cancel,
  component,
}: IModalConfirm) {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Sim"
      cancelText="Não"
    >
      {component}
    </Popconfirm>
  );
}
