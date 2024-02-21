import axios from 'axios'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

export default function Footer() {
  const [footer, setFooter] = useState('')

  const getFooter = async () => {
    try {
      await axios
      .get('/posts')
      .then(response => {
        response.data.filter((item) => item.title.rendered === 'Footer').map((post) => {
          setFooter(post.content.rendered)     
      })
      }) 
    } catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFooter()
  }, [])



  return (
    <div> 
      <footer>{parse(footer)}</footer>
      </div>
  )
}
