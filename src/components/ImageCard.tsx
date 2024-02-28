import axios from 'axios';
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

export default function ImageCard({page} : any) {

  const [featuredImage, setFeaturedimage] = useState('')

  const getImage = () => {
    axios
     .get(page?._links["wp:featuredmedia"][0]?.href)
     .then((response) => {
      setFeaturedimage(response.data.source_url);
    });
  };

  useEffect(() => {
    getImage()
  }, [])

  const bgImg = {
    backgroundImage: `url(${featuredImage})`,
  }

  return (

        <div style={bgImg} className='card-wrapper flex'>
        <div className="location-bg flex center column ">

            <a className='location-header' href={'#' + page.id}><h2>{page.title.rendered}</h2></a>
            <p className='location-address'>{parse(page.excerpt.rendered)}</p>
          
        </div>
      </div> 
  )
}
