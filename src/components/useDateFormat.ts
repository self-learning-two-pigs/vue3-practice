export const useDateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.toLocaleString('default', { year: 'numeric' });
  const month = date.toLocaleString('default', {
    month: '2-digit'
  });
  const day = date.toLocaleString('default', { day: '2-digit' });

  return [year, month, day].join('-');
};
