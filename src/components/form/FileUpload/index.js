import React from "react";
import { Upload, Form } from "antd";
import uploadIcon from "assets/icons/upload.svg";
import classNames from "classnames";
import PropTypes from "prop-types";

import "components/form/FileUpload/index.scss";

const { Dragger } = Upload;

const FileUpload = ({ 
  className, 
  name,
  label,
  imageUrl,
  hasFeedback,
  validateStatus,
  help,
  ...props
}) => {
  return (
    <Form.Item
      className={classNames("file-upload", className)}
      labelAlign="left"
      name={name}
      label={label}
      hasFeedback={hasFeedback}
      validateStatus={validateStatus}
      help={help}
    >
      <Dragger {...props}>
        <div className="image-preview" style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
          {!imageUrl && <>
            <p className="ant-upload-drag-icon">
              <img src={uploadIcon} alt="upload icon" />
            </p>
            <p>Drag and Drop to upload a file</p>
          </>}
        </div>
      </Dragger>
    </Form.Item>
  );
};

FileUpload.propTypes = {
  className: PropTypes.string,
};

FileUpload.defaultProps = {
  className: "",
};

export default FileUpload;
