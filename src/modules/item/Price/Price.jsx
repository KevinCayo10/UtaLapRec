import clsx from "clsx";

function Price({ price, currency, ...props }) {
  return (
    <span className={clsx("font-bold text-md", props.className)}>
      {/* {new Intl.NumberFormat("USD", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
        currencyDisplay: "symbol",
      })
        .format(price)
        .concat(` (${currency})`)} */}
      $ {price}
    </span>
  );
}

export default Price;
