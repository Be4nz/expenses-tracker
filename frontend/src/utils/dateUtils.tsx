export const FormatDate = (date: Date) => {
  let dateString = date.toString();
  return dateString.slice(0, dateString.indexOf("T"));
};
