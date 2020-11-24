export default function isThisGuyAllowed(name) {
  if (!name) {
    return false;
  }
  if (name.length <= 1) {
    return false;
  }
  return true;
}
