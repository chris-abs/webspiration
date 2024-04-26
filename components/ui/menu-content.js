'use client'

export default function MenuContent() {
  if (typeof window !== 'undefined') {
    const menu = document.getElementById('menu')
    const menuItems = document.getElementsByClassName('menu-item')

    if (menu) {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onmouseover = () => {
          console.log('Hovered index:', i)
          menu.dataset.activeIndex = i.toString()
        }
      }
    }
  }

  return (
    <div id='menu'>
      <div id='menu-items'>
        <a href='/' className='menu-item text-muted-foreground z-20'>
          Home
        </a>
        <a href='/' className='menu-item text-muted-foreground z-20'>
          Shop
        </a>
        <a href='/' className='menu-item text-muted-foreground z-20'>
          About
        </a>
        <a href='/' className='menu-item text-muted-foreground z-20'>
          Contact Us
        </a>
      </div>
      <div id='menu-background-pattern' />
      <div id='menu-background-image' />
    </div>
  )
}
