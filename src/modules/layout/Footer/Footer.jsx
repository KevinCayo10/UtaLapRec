function Footer () {
  return (
    <footer className='px-4'>
      <p className='z-50 pt-4 mt-10 text-sm text-center border-t pb-28 sm:py-4 sm:text-md text-muted-foreground'>
        Hecho con 🧉, React.js, Tailwind y MongoDB en 2024 por{' '}
        <a
          className='underline'
          rel='noopener noreferrer'
          target='_blank'
        >
          Matías Baldanza & Kevin Cayo
        </a>
        .
      </p>

      {/* En mobile, mostrar un degradado abajo (fixed) para que se vean bien los elementos posicionados abajo */}
      <div
        className='fixed bottom-0 left-0 z-40 w-full h-24 bg-gradient-to-t from-background via-background to-transparent sm:hidden'
      />
    </footer>
  )
}

export default Footer
