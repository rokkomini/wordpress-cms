import { useEffect, useState } from 'react'
// import './App.scss'
import './styles/style.scss'
import axios from 'axios'
import parse from 'html-react-parser'
import { Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import LocationPage from './pages/WelcomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'
import SideMenu from './components/SideMenu'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [menuActive, setMenuActive] = useState(false)

  axios.defaults.baseURL = process.env.REACT_APP_API_URI

  // const getData = async () => {
  //   try {
  //     await axios
  //       .get('')
  //       .then(response => console.log('app page', response.data))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div>
      <SideMenu showMenu={menuActive} exitMenu={() => setMenuActive(!menuActive)}/>
      <div className="width-wrapper">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Header 
          menuActive={menuActive}
          menuClick={() => setMenuActive(!menuActive)}
        />
        <div className=''>
          <Routes>
            <Route path={'/'} element={<WelcomePage/>}/>
            <Route path={'/:location'} element={<LocationPage />} />
          </Routes>
        </div>
        <Location />
      </div>
        <Footer />
    </div>
  )
}

export default App
