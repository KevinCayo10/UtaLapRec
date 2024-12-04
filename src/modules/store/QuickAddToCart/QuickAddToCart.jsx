import clsx from 'clsx'
import ShoppingBagIcon from '@/modules/ui/Icons/ShoppingBagIcon'
import Tooltip from '@/modules/ui/Tooltip'

function QuickAddToCart (props) {
  return (
    <Tooltip className='tooltip-primary' text='Agregar al carrito'>
      <button
        tabIndex={0}
        className={clsx('btn', props.className)}
        {...props}
      >
        <ShoppingBagIcon />
      </button>
    </Tooltip>
  )
}

export default QuickAddToCart
