import { Link } from 'react-router-dom'
import clsx from 'clsx'

function CartBreadcrumbs ({ steps, currentStep }) {
  return (
    <div className='text-2xl font-light uppercase breadcrumbs'>
      <ul>
        {steps.map((step, index) => (
          <li key={index} className={clsx(index === currentStep ? 'font-medium' : 'text-gray-400')}>
            {
              index < currentStep || index === currentStep + 1
                ? <Link to={step.path} className='text-gray-600'>{step.label}</Link>
                : <span className={clsx(index !== currentStep && 'cursor-not-allowed')}>{step.label}</span>
            }
          </li>
        ))}

      </ul>
    </div>
  )
}

export default CartBreadcrumbs
