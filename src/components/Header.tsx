import { useState } from 'react';
import '../styles/components/Header.scss'

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className='header'>
      <h1 className="header__logo">lamp</h1>
      <aside className='header__menu'>
        <button>Каталог</button>
        <button onClick={() => setCartCount(cartCount + 1)}>Корзина {cartCount} </button>
      </aside>
    </header>
  )
}

export default Header
