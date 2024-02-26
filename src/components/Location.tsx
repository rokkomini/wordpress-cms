import axios from 'axios'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

export default function Location() {
  const [posts, setPosts] = useState<any[]>([])
  
  const getMenus = async () => {
    try {
      await axios
      .get('/pages')
      .then(response => { 
        // setPosts(response.data.filter((post : any) => post.title.rendered.includes('meny')))
        setPosts(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getMenus()
  }, [])
  
  console.log('posts:', posts)
  
  return (
    <div>Location
      {/* {locationMenu} */}
      {posts && posts.map(post => (
        <div key={post.id} id={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>{parse(post.content.rendered)}</p>
        </div>
      ))}
    </div>
  )
  }
