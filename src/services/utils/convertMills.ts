export const convertMills = (mills: number): string => {
  const seconds = Math.round(mills / 1000) % 60;
  const minutes = Math.floor(Math.round(mills / 1000) / 60);
  return `${minutes}:${seconds}`;
};
