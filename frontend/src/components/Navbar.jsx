

import store from '@/redux/store'
import { setUser } from '@/redux/userSlice'
import axios from 'axios'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Navbar = () => {
  const {user} = useSelector(store=>store.user)
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async()=>{
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/user/logout`,{},{
        headers:{
          Authorization:`Bearer ${accessToken}`
        }
      })
      if(res.data.success){
        dispatch(setUser(null))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      
      
    }
  }

  return (
    <header className='bg-pink-100 fixed w-full z-20 border-b border-pink-200'>
      
      <div className='max-w-7xl mx-auto flex justify-between items-center py-3 px-6'>
        
        {/* logo */}
        <Link to="/">
          <img 
            src="/Ecomm.png" 
            alt="logo" 
            className='h-12  w-auto object-contain' 
          />
        </Link>

        {/* nav */}
        <nav className='flex gap-8 items-center'>
          
          <ul className='flex gap-6 items-center text-lg font-semibold'>
            <Link to='/' className="hover:text-pink-600 transition">
              <li>Home</li>
            </Link>
            <Link to='/products' className="hover:text-pink-600 transition">
              <li>Products</li>
            </Link>
            {user && (
              <Link to='/profile' className="hover:text-pink-600 transition">
                <li>Hello,{user.firstName}</li>
              </Link>
            )}
          </ul>

          {/* cart */}
          <Link to='/cart' className='relative group'>
            <ShoppingCart size={26} className="group-hover:text-pink-600 transition" />
            <span className='bg-pink-500 text-white text-xs rounded-full absolute -top-2 -right-3 px-2 py-[2px]'>
              0
            </span>
          </Link>

          {/* button */}
          {user ? (
            <button onClick={logoutHandler} className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition-all duration-200">
              Logout
            </button>
          ) : (
            <button onClick={()=>navigate('/login')} className="bg-gradient-to-r from-blue-600 to-purple-500 hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition-all duration-200">
              Login
            </button>
          )}

        </nav>
      </div>

    </header>
  )
}

export default Navbar