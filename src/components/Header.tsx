import '../styles/Header.scss'

const Header = () => {
  let cartCount: number = 0

  return (
    <header className='header'>
      <h1 className="header__logo">lamp</h1>
      <aside className='header__menu'>
        <button>Каталог</button>
        <button onClick={() => cartCount++}>Корзина {cartCount} </button>
      </aside>
    </header>
  )
}

export default Header
