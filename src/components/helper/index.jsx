// Date String Editing Function
export function dateConverter (date) {
  const newDate = date.replace('T', ' ').replace('Z', '');
  return newDate;
}