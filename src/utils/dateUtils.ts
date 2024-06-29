import moment from "moment";

type FormatDateType = "DD/MM/YYYY" | "HH:mm:ss";

export const formatDate = (format: FormatDateType, dateString: string) => {
  if (format === "HH:mm:ss") {
    return moment(parseInt(dateString)).format(format);
  }
  return moment(dateString).format(format);
};
