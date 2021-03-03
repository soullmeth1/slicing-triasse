export default function formatName(val) {
  if (val) {
    const name = val
      .split('-')
      .map((res) => (res = res.replace(res[0], res[0].toUpperCase())))
      .join(' ');
    return name;
  }
}
