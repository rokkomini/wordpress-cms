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
    <div>
      {headerImage && headerImage.filter(image => image.title.rendered === 'logo-header').map(img => (
        <img src={img.source_url} alt={img.alt_text} />
      ))}
      Kontakt
    </div>
  )
}
