import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Header() {
  const [headerImage, setHeaderImage] = useState('')

  const getImage = () => {
    axios
      .get('http://eatmyfood.local/wp-json/wp/v2/media')
      .then(response => setHeaderImage(response.data))
  }

  useEffect(() => {
    getImage()
  }, [])
  
  return (
    <div className='header flex'>
      <div className="header-img">
        {headerImage && headerImage.filter(image => image.title.rendered === 'logo-header').map(img => (
          <img src={img.source_url} alt={img.alt_text} />
        ))}
      </div>
      <div className="header-links">
        <ul>
          <li><a href="">Kontakt</a></li>
          <li><a href="">Hagsätra</a></li>
          <li><a href="">Stockholm Centralstation</a></li>
        </ul>
      </div>
    </div>
  )
}
