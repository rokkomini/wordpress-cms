import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ menuClick, menuActive }: any) {
  const [headerImage, setHeaderImage] = useState<any>('')
  const [showList, setShowList] = useState(false)

  const getImage = () => {
    axios
      .get('http://eatmyfood.local/wp-json/wp/v2/media')
      .then(response => {
        response.data.filter((media: any) => media.title.rendered === 'logo-header').map((img: any) => {
          setHeaderImage(img)
        })
      })
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <>
      <div className='menu-curtain'></div>
      <div className='header flex'>
        <div className="header-img flex center">

          <img src={headerImage?.source_url} alt={headerImage?.alt_text} />

        </div>

        <div className="flex space-between menu-nav" >
          <div className="flex header-links">
      
              <a href="">Kontakt</a>
              <a href="">Om oss</a>
              <a href="">Hagsätra</a>
              <a href="">Stockholm Centralstation</a>
     
          </div>
          {menuActive ? 
            <FiX onClick={menuClick} className={menuActive ? 'exit show' : 'exit hide'}/> 
              :  
            <FiMenu onClick={menuClick} className={menuActive ? 'hamburger hide' : 'hamburger show'}/>
          }
          {/* <FiMenu onClick={menuClick}  className={menuActive ? 'hamburger hide' : 'hamburger show'}/>
          <FiX onClick={menuClick} className={menuActive ?  'exit show' : 'exit hide'}/> */}
        </div>
      </div>
    </>
  )
}
