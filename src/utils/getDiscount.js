import formatMoney from './formatMoney';

export default function getDiscount(val, dc) {
  return formatMoney(val - (val * dc) / 100);
}
