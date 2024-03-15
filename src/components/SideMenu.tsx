import React from 'react'
import { FiX } from "react-icons/fi";

export default function SideMenu({ showMenu, exitMenu }: any) {
  return (
    <aside className='flex side-menu' style={showMenu ? { display: 'block' } : { display: 'none' }}>
      <FiX onClick={exitMenu}/>
      <div className='overlay' />
      <div className='flex header-links content'>
        <a href="">Kontakt</a>
        <a href="">Om oss</a>
        <a href="">Hagsätra</a>
        <a href="">Stockholm Centralstation</a>
      </div>
    </aside>
  )
}
