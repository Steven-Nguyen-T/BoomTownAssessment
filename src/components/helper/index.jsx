// Date String Editing Function
export function dateConverter (date) {
  const newDate = date.replace('T', ' ').replace('Z', '');
  return newDate;
}

// Removes unnecessary text from URL
export function urlTrim (url) {
  const newUrl = url.replace('{/member}', '');
  return newUrl;
}
