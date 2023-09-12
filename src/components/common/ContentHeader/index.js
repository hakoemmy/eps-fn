import React from "react";
import { Button, Progress } from "antd";
import RawDatePicker from "components/RawDatePicker";
import RawSelect from "components/RawSelect";
import "./index.scss";

const ContentHeader = ({
  headerTitle,
  isDownloading = false,
  inputs = [],
  downloadPercentage,
}) => {
  return (
    <div className="d-flex sticky-top bg-light justify-content-between align-items-center content-header">
      {isDownloading && (
        <div className="fixed-top mx-3 mt-0">
          <Progress percent={downloadPercentage} />
        </div>
      )}
      <h1 className="table-title mb-0">{headerTitle}</h1>
      <div className="inputs-container">
        {inputs.map(({ type, label, ...inputProps }, index) => {
          if (type === "datepicker") {
            return (
              <RawDatePicker
                key={index}
                className="datepicker content-header-datepicker mx-1"
                {...inputProps}
              />
            );
          }
          if (type === "select") {
            return (
              <RawSelect
                key={index}
                className="select mx-1"
                allowClear
                {...inputProps}
              />
            );
          }
          return (
            <Button
              key={index}
              className="content-header-button mx-1"
              type="primary"
              {...inputProps}
            >
              {label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ContentHeader;
