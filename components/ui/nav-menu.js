'use client'

export default function NavMenu() {
  if (typeof window !== 'undefined') {
    const menu = document.getElementById('menu')
    const menuItems = document.getElementsByClassName('menu-item')

    if (menu) {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onmouseover = () => {
          console.log('Hovered index:', i) // Log the index when hovered
          menu.dataset.activeIndex = i.toString()
        }
      }
    }
  }

  return (
    <div id='menu'>
      <div id='menu-items'>
        <a href='/' className='menu-item'>
          Home
        </a>
        <a href='/' className='menu-item'>
          Shop
        </a>
        <a href='/' className='menu-item'>
          About
        </a>
        <a href='/' className='menu-item'>
          Contact Us
        </a>
      </div>
      <div id='menu-background-pattern'></div>
      <div id='menu-background-image'></div>
    </div>
  )
}
