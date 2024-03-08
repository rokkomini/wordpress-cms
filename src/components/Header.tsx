import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiMenu } from "react-icons/fi";

export default function Header() {
  const [headerImage, setHeaderImage] = useState('')
  const [showList, setShowList] = useState(false)

  const getImage = () => {
    axios
      .get('http://eatmyfood.local/wp-json/wp/v2/media')
      .then(response => {
        response.data.filter((media : any) => media.title.rendered === 'logo-header').map((img:any) => {
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
      <div className="header-img">
        
          <img src={headerImage?.source_url} alt={headerImage?.alt_text} />
   
      </div>

      <div className="flex space-between header-links" >
      <button>
        <FiMenu />
      </button>
          <a href="">Kontakt</a>
          <a href="">Om oss</a>
         <a href="">Hagsätra</a>
          <a href="">Stockholm Centralstation</a>
      </div>
    </div>
    </>
  )
}
