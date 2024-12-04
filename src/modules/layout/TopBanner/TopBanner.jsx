function TopBanner ({ children }) {
  const styles = `py-12 m-4 text-4xl font-bold text-center rounded-xl mb-[-56px] h-36
                  bg-blue-200 bg-[url('/images/top-banner.jpeg')] bg-cover bg-[50%_47%] bg-no-repeat]`

  return (
    <div className={styles}>
      {children}
    </div>
  )
}

export default TopBanner
