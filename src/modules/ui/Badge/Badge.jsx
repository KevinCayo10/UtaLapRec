import clsx from "clsx";

function Badge({ children, ...props }) {
  const baseStyles = `font-extrabold border-0  bg-red-500 badge badge-sm indicator-item
                       sm:bg-red-500`;
  return (
    <span className={clsx(baseStyles, props.className)} {...props}>
      {children}
    </span>
  );
}

export default Badge;
