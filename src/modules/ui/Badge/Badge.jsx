import clsx from 'clsx'

function Badge ({ children, ...props }) {
  const baseStyles = `font-extrabold border-0 text-brand bg-background badge badge-sm indicator-item
                      sm:text-background sm:bg-foreground`
  return (
    <span
      className={clsx(baseStyles, props.className)}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
