import React from 'react';
import {
  Modal,
  Form,
  Button,
  Typography
} from 'antd';
import PropTypes from 'prop-types';

const { Text } = Typography;

/**
 * @description Modal with a build in form
 * To override the build in form add a prop
 * formProps = { 
 *   form: yourForm, 
 *   ...otherFormProps 
 * }
 * You also need to pass a customized footer
 * The default footer works only with build in form
 * @param {*} props 
 * @returns {ReactNode} FormModal
 */
const FormModal = ({
  title,
  onCancel,
  loading,
  error,
  zIndex,
  children,
  onFinish,
  initialValues,
  layout,
  size,
  bodyStyle,
  formProps,
  ...props
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={true}
      title={title}
      onCancel={onCancel}
      centered
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={form.submit}
          loading={loading}
        >
          Save
        </Button>,
      ]}
      zIndex={zIndex}
      width={size === "small" ? "600px" : "900px"}
      bodyStyle={{
        maxHeight: "70vh",
        overflow: "auto",
        ...bodyStyle,
      }}
      {...props}
    >
      <Form
        form={form}
        layout={layout}
        requiredMark={false}
        onFinish={onFinish}
        initialValues={initialValues}
        {...formProps}
      >
        {children}
        {error && <Text type="danger">{error}</Text>}
      </Form>
    </Modal>
  );
};

FormModal.defaultProps = {
  title: '',
  onCancel: () => {},
  loading: false,
  error: null,
  zIndex: undefined,
  initialValues: {},
  onFinish: () => {},
  layout: 'vertical',
  size: 'small',
  bodyStyle: {},
  formProps: {}
};

FormModal.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  zIndex: PropTypes.number,
  initialValues: PropTypes.objectOf(PropTypes.any),
  onFinish: PropTypes.func,
  layout: PropTypes.string,
  size: PropTypes.string,
  bodyStyle: PropTypes.objectOf(PropTypes.any),
  formProps: PropTypes.objectOf(PropTypes.any)
}

export default FormModal;
