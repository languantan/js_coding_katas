export default function (original, test) {
  return `${original}${original}`.indexOf(test) > -1;
}
