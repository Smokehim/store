import img from './assets/burger-8983946_1280.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router'

export function Navbar(){
    const [open , isOpen] = useState(false)
    const handleClick = ()=>{
        isOpen(item=> !item)
    }

    return(
        <header className='p-0'>
            <nav className='flex justify-between bg-black p-2 items-center md:gap-9'>
                <div className="flex cursor-pointer justify-baseline items-center p-3">
                    <img src={img} className='w-10 h-10' alt="" />
                    <p className='text-xl  text-white hover:text-gray-800'>OrderBay</p>
                </div>
                
                <div className='p-3 gap-9 flex'>
                    <ul className=' hidden md:flex  text-white gap-8 p-3'>
                        <li className='cursor-pointer hover:text-gray-800'><Link to="/home">Home</Link></li>
                        <li className='cursor-pointer hover:text-gray-800'><Link to="/menu">Menu</Link></li>
                        <li className='cursor-pointer hover:text-gray-800'><Link to="/shop">Shop</Link></li>
                        
                    </ul>
                    <div className='flex justify-end items-baseline text-white gap-9  '>
                        <Link to="/cart"><FontAwesomeIcon className=' cursor-pointer hover:text-gray-800 hidden md:flex' icon={faCartShopping}/></Link>
                        <div className='flex gap-5 justify-center items-baseline'>
                            <button  className='border text-center px-5 hidden md:flex cursor-pointer hover:text-gray-800 font-bold p-2 rounded-2xl w-20 border-white bg-white text-black'>Login</button>
                            <FontAwesomeIcon onClick={handleClick} className='cursor-pointer hover:text-gray-800 flex md:hidden' icon={faBars}/>
                        </div>
                    </div>
                        
                </div>
            </nav>
            <div>
                { open &&
                    <div className={ `gap-9 flex flex-col transition-all duration-300 overflow-hidden  ${ open ? `true max-h-96 opacity-100`:  `false max-h-0 opacity-0`} md:hidden p-5 bg-black`}>
                    <ul className=' flex-col  text-white gap-8 p-3'>
                        <li className='cursor-pointer hover:text-gray-800'><Link to="/home">Home</Link></li>
                        <li className='cursor-pointer hover:text-gray-800'><Link to="/menu">Menu</Link></li>
                        <li className='cursor-pointer hover:text-gray-800'><Link to="/shop">Shop</Link></li>
                        
                    </ul>
                    <div className='flex justify-start items-baseline text-white gap-9  '>
                        <button className='border text-center px-5 cursor-pointer hover:text-gray-800 font-bold p-2 rounded-2xl w-20 border-white bg-white text-black'>Login</button>
                    </div>
                        
                </div>}
            </div>
        </header>
    )
}