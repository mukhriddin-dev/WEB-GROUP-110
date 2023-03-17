const Header = () => {
    return <>
    
        <header>
        <div className='container'>
          <nav className='nav'>
            <a href='#' className='nav__logo'>
              LOGO
            </a>
            <ul className='nav__ul'>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-link'>
                  item-1
                </a>
              </li>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-link'>
                  item-2
                </a>
              </li>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-link'>
                  item-3
                </a>
              </li>
              <li className='nav__ul--list'>
                <a href='#' className='nav__ul--list-link'>
                  item-4
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    
    
    
    </>
}


export default Header;