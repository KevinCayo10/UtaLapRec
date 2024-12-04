const openNewIssue = () => {
  const url = 'https://github.com/matiasbaldanza/ecommerce-reactjs/issues/new'
  const win = window.open(url, '_blank')
  win.focus()
}

function ReportErrorButton () {
  return (
    <div className='absolute top-0 text-white right-5 tooltip tooltip-left tooltip-warning' data-tip='Avisar de error'>
      <button
        className='text-2xl bg-transparent border-0 cursor-pointer btn btn-ghost hover:bg-transparent'
        onClick={openNewIssue}
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' width='40' height='40' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M19 4c.852 0 1.297 .986 .783 1.623l-.076 .084l-3.792 3.793l3.792 3.793c.603 .602 .22 1.614 -.593 1.701l-.114 .006h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z' strokeWidth='0' fill='currentColor' /></svg>
      </button>
    </div>
  )
}

export default ReportErrorButton
