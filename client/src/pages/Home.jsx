import React from 'react'
//import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'

const Home = () => {
  return (
    <div className='flex-col'>
      <Sidebar/>
      <Navbar/>
      
    </div>
    
  )
}

export default Home