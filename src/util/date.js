export const getKoreanDate = (
  date,
  options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  },
) => {
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

export const getSlot = (date) => {
  if (6 <= date.getHours() && date.getHours() < 12) return "아침";
  if (13 <= date.getHours() && date.getHours() < 18) return "오후";
  return "저녁";
};
