const amount = 101000;

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
});
const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(yen.format(amount));
console.log(euro.format(amount));
