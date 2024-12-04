import clsx from 'clsx'

function AnnouncementBar ({ ...props }) {
  const bannerStyles = clsx('text-white flex items-center justify-center relative', props.style)
  const textStyles = 'px-4 py-3 text-sm tracking-widest text-center uppercase font-bold'

  return (
    <div className={clsx(bannerStyles, props.className)}>
      <div className={textStyles}>
        {props.children}
      </div>
    </div>
  )
}

export default AnnouncementBar
