export function passwordCheck(value) {
  if (value.length >= 6) {
    return true;
  }
  return false;
}
