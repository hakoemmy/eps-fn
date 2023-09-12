import { Table, Card } from "antd";
import PropTypes from 'prop-types';

import './index.scss';

/**
 * @description create a default render functions
 * for each column in the table
 * if a record field is not defined or null, '---' is used
 * @param {array} columns 
 * @returns {array} columns
 */
const generateDefaultRenders = (columns = []) => {
  return columns.map((column) => {
    const {
      dataIndex,
      render = (key,record) => record[dataIndex],
    } = column;
    
    return {
      ...column,
      render: (key, record = {}, index) => {
        const value = render(key, record, index);
        const isZero = value === 0;
        return value || isZero ? value : '---'
      }
    }
  })
}

const getTableHeight = (pageSize, totalCount) => {
  const tableHeight = window.innerHeight - 240;
  if(totalCount <= pageSize) {
    return tableHeight
  }
  return tableHeight - 64;
}

const CustomTable = ({
  pagination = {},
  totalCount,
  pageSize,
  currentPage,
  onPageChange,
  columns,
  ...props
}) => {
  return <Card>
    <Table
  pagination={{
    position: ["bottomCenter"],
    total: totalCount,
    pageSize: pageSize,
    current: currentPage,
    onChange: onPageChange,
    showSizeChanger: false,
    hideOnSinglePage: true,
    ...pagination
  }}
  columns={generateDefaultRenders(columns)}
  scroll={{
    y: getTableHeight(pageSize, totalCount)
  }}
  {...props}
  />
  </Card>
};

export default CustomTable;

CustomTable.propTypes = {
  pagination: PropTypes.objectOf(PropTypes.any),
  totalCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

CustomTable.defaultProps = {
  onPageChange: () => {}
}

