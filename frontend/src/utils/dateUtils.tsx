export const FormatDate = (date: Date) => {
  let dateString = date.toString();
  return dateString.slice(0, dateString.indexOf("T"));
};

export const GetMonthName = (monthNumber: number) => {
  const date = new Date();
  date.setMonth(monthNumber);

  return date.toLocaleString("en-US", { month: "long" });
};
