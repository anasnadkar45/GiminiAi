import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput } = useContext(Context)

    return (
        <div className='w-full flex-1 min-h-[100vh] relative pb-[15vh]'>
            <nav className='flex justify-between items-center p-[20px] text-[#585858]'>
                <p className='inline-block font-bold text-2xl'>Gemini</p>
                <img src={assets.user_icon} alt="user" className='w-[40px] rounded-full' />
            </nav>

            {/* main container */}
            <div className='max-w-[900px] m-auto'>
                {
                    !showResult ? (<>
                        <div className=' my-[50px] text-[56px] text-[#c4c7c5] font-bold p-[20px]'>
                            <p><span className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#4b90ff] from-20% to-[#ff5546]'>Hello, Dev.</span></p>
                            <p className='text-5xl font-bold'>How can I help you today?</p>
                        </div>
                        {/* cards */}
                        <div className='grid grid-cols-4 gap-[15px] p-[15px]'>
                            <div className='h-[200px] p-[15px] bg-[#f0f4f9] hover:bg-[#dfe1e5] transition-all duration-300 rounded-md relative cursor-pointer'>
                                <p className='text-[#585858] text-[17px]'>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" className='w-[35px] p-[5px] absolute bg-[#fff] 
                                  rounded-[20px] bottom-[10px] right-[10px]'/>
                            </div>
                            <div className='h-[200px] p-[15px] bg-[#f0f4f9] hover:bg-[#dfe1e5] transition-all duration-300 rounded-md relative cursor-pointer'>
                                <p className='text-[#585858] text-[17px]'>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" className='w-[35px] p-[5px] absolute bg-[#fff] 
                                  rounded-[20px] bottom-[10px] right-[10px]'/>
                            </div>
                            <div className='h-[200px] p-[15px] bg-[#f0f4f9] hover:bg-[#dfe1e5] transition-all duration-300 rounded-md relative cursor-pointer'>
                                <p className='text-[#585858] text-[17px]'>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" className='w-[35px] p-[5px] absolute bg-[#fff] 
                                  rounded-[20px] bottom-[10px] right-[10px]'/>
                            </div>
                            <div className='h-[200px] p-[15px] bg-[#f0f4f9] hover:bg-[#dfe1e5] transition-all duration-300 rounded-md relative cursor-pointer'>
                                <p className='text-[#585858] text-[17px]'>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt="" className='w-[35px] p-[5px] absolute bg-[#fff] 
                                  rounded-[20px] bottom-[10px] right-[10px]'/>
                            </div>
                        </div>
                    </>) :
                        (
                            <div className='result max-h-[70vh] px-[5%] overflow-y-scroll'>
                                {/* result title */}
                                <div className='my-[40px] flex items-center gap-20'>
                                    <img src={assets.user_icon} alt="" className='rounded-full w-[40px]' />
                                    <p>{recentPrompt}</p>
                                </div>

                                {/* result data */}
                                <div className='flex items-start gap-[20px]'>
                                    <img className='w-[40px]' src={assets.gemini_icon} alt="" />
                                    {
                                        loading ? (
                                            <div className='loader w-full flex-col space-y-2'>
                                                <hr />
                                                <hr />
                                                <hr />
                                            </div>
                                        ) : (
                                            <p className='text-[17px] font-[300] leading-6' 
                                            dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                        )
                                    }

                                </div>
                            </div>
                        )
                }


                {/* bottom */}
                <div className='absolute bottom-0 w-full max-w-[900px] p-x[20px] m-auto'>
                    {/* search box */}
                    <div className='flex justify-between items-center gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-full'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter the prompt' className='flex-1 border-none bg-transparent outline-none p-[8px] text-[18px]' />
                        <div className='flex gap-[15px]'>
                            <img src={assets.gallery_icon} alt="" className='w-[24px] cursor-pointer' />
                            <img src={assets.mic_icon} alt="" className='w-[24px] cursor-pointer' />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" className='w-[24px] cursor-pointer' />
                        </div>
                    </div>
                    <p className='text-[13px] my-[15px] mx-auto text-center font-semibold'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Main
