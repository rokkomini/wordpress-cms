import React from 'react'
import { FiX } from "react-icons/fi";

export default function SideMenu({ showMenu, exitMenu }: any) {
  return (
    <aside className={showMenu ? 'side-menu show' : 'side-menu'}>
      <div className="flex start">
        <FiX onClick={exitMenu}/>
        <div className='overlay' />
        <div className='flex start header-links content'>
          <a href="">Kontakt</a>
          <a href="">Om oss</a>
          <a href="">Hagsätra</a>
          <a href="">Stockholm Centralstation</a>
        </div>
      </div>
    </aside>
  )
}
