import React from 'react'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='w-full'>
      <nav className='flex justify-between items-center p-[20px] text-[#585858]'>
        <p>Gimini</p>
        <img src={assets.user_icon} alt="user" className='w-[40px] rounded-full'/>
      </nav>
    </div>
  )
}

export default Main
