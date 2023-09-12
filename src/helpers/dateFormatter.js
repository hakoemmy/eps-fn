import moment from "moment";

const dateFormatter = (date) => {
  return date ? moment(date).format("ll") : "";
};

export default dateFormatter;
