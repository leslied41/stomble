const converDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${day} / ${month + 1} / ${year}`;
};

export default converDate;
