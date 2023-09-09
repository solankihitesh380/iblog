import React, { useState } from 'react'
import { logo,menu,close } from '../Assets'
const Navbar = () => {
const [Manu,SetManu] = useState(false);
    return (
    <header className='w-full px-16 p-6 max-lg:p-2'>
        <nav className='flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center'>
            <img className='rounded-full bg-black p-2 w-[50px]' src={logo} alt="" /><span className='mx-5 text-purple-600 font-bold text-xl'>iBlog</span>
            
            </div>
            <ul className='flex flex-row gap-10 max-lg:hidden items-center'>
                <li><a className='text-white semibold text-lg dark:md:hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>Home</a></li>
                <li><a className='text-white semibold text-lg dark:md:hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>Blogs</a></li>
                <li><a className='text-white semibold text-lg dark:md:hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>About Us </a></li>
                <li><a className='text-white semibold text-lg dark:md:hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>Contact Us</a></li>
            </ul>
            <div className='hidden max-lg:block' >
                    <img className='w-[20px] mr-5' src={Manu ? close : menu} alt="" onClick={()=>SetManu(!Manu)}/>
            </div>
            <div className={`${Manu ? 'flex' : 'hidden'} header-bg justify-end items-center p-6 rounded-xl right-0 mx-10 absolute top-20 bg-black`}>
                    <ul className='gap-7 flex justify-end items-start flex-col flex-1 '>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>Home</a>
                        </li>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>Blogs</a>
                        </li>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>About Us</a>
                        </li>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white hover:bg-fuchsia-400 hover:rounded-xl hover:p-2'>Contact Us</a>
                        </li>
                    </ul>

                </div>
           
        </nav>
    </header>
  )
}

export default Navbar
