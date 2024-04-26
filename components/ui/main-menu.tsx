// 'use client'
// import React, { useEffect } from 'react'
// import { MenuIcon } from 'lucide-react'

// import { Drawer, DrawerContent, DrawerTrigger } from './drawer'
// import MenuContent from './menu-content'

// export default function MainMenu() {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const menu = document.getElementById('menu')
//       const menuItems = document.getElementsByClassName('menu-item')

//       if (menu) {
//         for (let i = 0; i < menuItems.length; i++) {
//           const menuItem = menuItems[i] as HTMLElement
//           menuItem.onmouseover = () => {
//             console.log('Hovered index:', i)
//             menu.dataset.activeIndex = i.toString()
//           }
//         }
//       }
//     }
//   }, [])

//   return (
//     <Drawer direction='right'>
//       <DrawerTrigger>
//         <MenuIcon />
//       </DrawerTrigger>
//       <DrawerContent>
//         <MenuContent />
//       </DrawerContent>
//     </Drawer>
//   )
// }
