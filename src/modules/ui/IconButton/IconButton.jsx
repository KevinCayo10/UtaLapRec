import clsx from 'clsx'

function IconButton ({ icon, onClick, ...props }) {
  return (
    <button
      {...props}
      className={clsx('btn', props.className)}
      onClick={onClick}
    >
      <div className='flex items-center w-full gap-4'>
        {icon}
        <span className='flex-1'>{props.children}</span>
      </div>
    </button>
  )
}

export default IconButton
