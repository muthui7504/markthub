import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { FaSearch, FaBars, FaBell, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const navigate = useNavigate()
  const  {userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContext)

  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between ml-64'>
      <div className='flex items-center text-xl'>
        <FaBars className='text-white me-4 cursor-pointer'/>
        <span className='text-white font-semibold'>E-commerse</span>
      </div>
      <div className='flex items-center gap-x-5 '>
        <div className='relative md:w-65'>
          <span className='ralative md:absolute insert-y-0 left-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-white md:text-black '><FaSearch/></button>
          </span>
          <input type="text" className='w-full px-4 py-1 pl-12 rounded outline-none shadow hidden md:block bg-white'/>
        </div>
        <div className='text-white cursor-pointer'><FaBell className='w-6 h-6'/></div>
        <div className='relative '>
          <button className='text-white cursor-pointer group'>
            <FaUserCircle className='w-6 h-6 mt-1'/>
            <div className='absolute hidden group-hover:block top-7 w-32 right-0 z-10 bg-white rounded  shadow'>
              <ul className='py-2 text-sm text-gray-900'>
                <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'><Link to='/profile' >profile</Link> </li>
                <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Setting</li>
                <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Logout</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>

    /***<div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
        <img src={assets.logo} alt=""  className='w-28 sm:w-32'/>
        {userData ? 
        <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
            <ul className='list-none m-0  p-2 bg-gray-100 text-sm'>
              <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>
              <li className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
            </ul>
          </div>
        </div> :
        <button onClick={() => navigate('/login')} className='flex items-center gap-2 border border-gray-500 
          rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 
          transition-all '>Login <img src={assets.arrow_icon} alt="" /></button>
    
         }
        </div>***/
  )
}

export default Navbar