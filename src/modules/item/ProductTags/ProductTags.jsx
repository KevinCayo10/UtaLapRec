
function ProductTags ({ brand, category }) {
  return (
    <div className='flex flex-row gap-4'>
      {[brand, category].map((tag) => {
        return (
          <div
            key={tag}
            className='gap-2 p-4 badge badge-xl badge-outline badge-accent'
          >
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-4 h-4 stroke-current'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /></svg>
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default ProductTags
