import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const handleDelete = async (itemType, deleteSuccess, key) => {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: `Are you sure you want to delete this ${itemType}?`,
    okText: "Yes, delete",
    cancelText: "Cancel",
    onOk: () => deleteSuccess(key),
    zIndex: '1040',
    centered: true,
  });
};

export default handleDelete;
