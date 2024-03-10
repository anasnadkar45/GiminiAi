import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [isExtended, setIsExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt } = useContext(Context)

    return (
        // sidebar
        <div className='min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-[25px] px-[15px] '>
            <div className='flex-col space-y-9'>
                {/* menu icon */}
                <div className='w-full pl-5'>
                    <img src={assets.menu_icon} alt="" className='w-[20px] cursor-pointer transition-all duration-500' onClick={() => setIsExtended(prev => !prev)} />
                </div>

                {/* new chat button */}
                <div className='w-fit flex items-center py-4 px-5 bg-[#e6eaf1] rounded-full gap-6 text-lg text-gray-500 cursor-pointer'>
                    <img src={assets.plus_icon} alt="" className='w-[20px]' />
                    {
                        isExtended ? (<p className=''>New Chat</p>) : (null)
                    }
                </div>
                {/* recent chat */}
                <div>
                    {
                        isExtended ? (<div>
                            <p>Recent</p>
                            {
                                prevPrompts.map((item, index) => (
                                    <div onClick={() => {
                                        setRecentPrompt(index)
                                        onSent()
                                    }} className='flex items-center py-[15px] pl-[15px] pr-[40px] gap-4 text-sm text-slate-700 cursor-pointer'>
                                        <img src={assets.message_icon} alt="" className='w-[25px] text-gray-500' />
                                        <p>{item.slice(0,18)}...</p>
                                    </div>
                                ))
                            }

                        </div>) : (null)
                    }

                </div>
            </div>
        </div>
    )
}

export default Sidebar
