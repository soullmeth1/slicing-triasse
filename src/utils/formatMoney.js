export default function formatMoney(val) {
  const options = {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  };

  const formatter = Intl.NumberFormat('id', options);
  return formatter.format(val);
}
