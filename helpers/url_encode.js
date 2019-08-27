export default function urlEncode(str) {
  return str.replace(/#/gi, '%23');
}
