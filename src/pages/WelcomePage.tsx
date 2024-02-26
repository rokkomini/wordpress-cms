import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCard from '../components/ImageCard';

export default function WelcomePage() {
  const [pages, setPages] = useState<any[]>([])

  // axios.defaults.baseURL = process.env.REACT_APP_API_URI

  const getData = async () => {
    try {
      await axios
        .get('/pages')
        .then(response => setPages(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='flex'>
      {pages && pages.map((page) => (
          <ImageCard page={page} key={page.id} />
      ))}
    </div>
  )
}