import clsx from 'clsx'

function Tooltip ({ text, children, ...props }) {
  const styles = clsx('ml-2 tooltip', props.className)

  return (
    <div
      data-tip={text}
      className={styles}
    >
      {children}
    </div>
  )
}

export default Tooltip
