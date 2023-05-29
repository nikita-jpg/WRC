export const toISODateString = (dateStr: string, devider: string): string => {
  const [day, month, year] = dateStr.split(devider);
  return year + devider + month + devider + day;
};
