// Componentes
import TextWithLineBreaks from '../TextWithLineBreaks/TextWithLineBreaks'
import Price from '../Price/Price'
import Tooltip from '@/modules/ui/Tooltip/Tooltip'

function ProductInfo ({ title, price, stock }) {
  return (
    <>
      <h1
        className='text-3xl font-bold text-center card-title sm:text-left'
      ><TextWithLineBreaks>{title}</TextWithLineBreaks>
      </h1>
      <div>
        Precio exclusivo:
        <Tooltip className='tooltip-top sm:tooltip-right' text='Transferencia, depósito o efectivo'>
          <button className='badge badge-sm align-super text-bold'>i</button>
        </Tooltip>
        <p><Price className='text-2xl text-info ' price={price} currency={price} /></p>
      </div>
      <p>Stock disponible: {stock}</p>
      <div className='gap-2 p-4 badge badge-xl badge-success'>
        Envío gratuito a domicilio
      </div>
    </>
  )
}

export default ProductInfo
