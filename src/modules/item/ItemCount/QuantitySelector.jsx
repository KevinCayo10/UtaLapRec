import clsx from 'clsx'
import { removeNumberInputControls } from '@/styles/styleUtils'

/* Para usar con el custom hook useQuantity */
function QuantitySelector ({ quantity, min = 1, max, step = 1, handleIncrement, handleDecrement, compact = false, wide = true }) {
  const buttonCompactStyle = clsx(compact ? 'btn-sm' : 'btn-md')
  const inputCompactStyle = clsx(compact ? 'input-sm' : 'input-md')
  const buttonStyle = 'absolute top-0 w-6 btn btn-primary'
  const inputStyle = clsx('text-center input input-bordered arrow-hide px-12', wide && 'w-full')

  return (
    <>
      <button
        className={clsx(buttonStyle, buttonCompactStyle, 'left-0 rounded-r-none')}
        onClick={() => handleDecrement(step)}
      > -
      </button>
      <input
        type='number'
        min={min}
        max={max}
        step={step}
        className={clsx(removeNumberInputControls, inputCompactStyle, inputStyle)}
        value={quantity}
        readOnly
      />
      <button
        className={clsx(buttonStyle, buttonCompactStyle, 'right-0 rounded-l-none')}
        onClick={() => handleIncrement(step)}
      > +
      </button>
    </>
  )
}

export default QuantitySelector
