import cookies1 from './assets/WhatsApp Image 2025-06-11 at 19.57.46.jpeg'
import cookies2 from './assets/WhatsApp Image 2025-06-11 at 19.57.47.jpeg'
import cookies3 from './assets/WhatsApp Image 2025-06-11 at 19.57.48.jpeg'
import cookies4 from './assets/WhatsApp Image 2025-06-11 at 19.57.47.jpeg'
import cookies5 from './assets/WhatsApp Image 2025-06-11 at 19.57.49.jpeg'
import cookies6 from './assets/WhatsApp Image 2025-06-11 at 19.57.50.jpeg'
import cookies7 from './assets/WhatsApp Image 2025-06-11 at 19.58.01.jpeg'
import cookies8 from './assets/WhatsApp Image 2025-06-11 at 19.58.01.jpeg'
import chips1 from './assets/WhatsApp Image 2025-06-11 at 19.58.02.jpeg'
import chips2 from './assets/WhatsApp Image 2025-06-11 at 19.58.02.jpeg'
import chips3 from './assets/WhatsApp Image 2025-06-11 at 19.58.03.jpeg'
import chips4 from './assets/WhatsApp Image 2025-06-11 at 19.58.03 (1).jpeg'
import chips5 from './assets/WhatsApp Image 2025-06-11 at 19.58.04.jpeg'
import chips6 from './assets/WhatsApp Image 2025-06-11 at 19.58.33.jpeg'
import chips7 from './assets/WhatsApp Image 2025-06-11 at 19.58.36.jpeg'
import chips8 from './assets/WhatsApp Image 2025-06-11 at 19.58.32.jpeg'
import drinks1 from './assets/WhatsApp Image 2025-06-11 at 19.58.20.jpeg'
import drinks2 from './assets/WhatsApp Image 2025-06-11 at 19.58.22.jpeg'
import drinks3 from './assets/WhatsApp Image 2025-06-11 at 19.58.23.jpeg'
import drinks4 from './assets/WhatsApp Image 2025-06-11 at 19.58.21.jpeg'
import drinks5 from './assets/WhatsApp Image 2025-06-11 at 19.58.24.jpeg'
import drinks6 from './assets/WhatsApp Image 2025-06-11 at 19.58.24 (1).jpeg'
import drinks7 from './assets/WhatsApp Image 2025-06-11 at 19.58.25.jpeg'
import drinks8 from './assets/WhatsApp Image 2025-06-11 at 19.58.27.jpeg'
import burgers1 from './assets/WhatsApp Image 2025-06-11 at 19.58.33 (1).jpeg'
import burgers2 from './assets/WhatsApp Image 2025-06-11 at 19.58.36.jpeg'
import burgers3 from './assets/WhatsApp Image 2025-06-11 at 19.58.35.jpeg'
import burgers4 from './assets/WhatsApp Image 2025-06-11 at 19.58.34.jpeg'
import burgers5 from './assets/WhatsApp Image 2025-06-11 at 19.58.36 (1).jpeg'
import burgers6 from './assets/WhatsApp Image 2025-06-11 at 19.58.33 (2).jpeg'
import burgers7 from './assets/WhatsApp Image 2025-06-11 at 19.58.37.jpeg'
import burgers8 from './assets/WhatsApp Image 2025-06-11 at 19.58.34.jpeg'
import nshima1 from './assets/WhatsApp Image 2025-06-11 at 19.58.09 (1).jpeg'
import nshima2 from './assets/WhatsApp Image 2025-06-11 at 19.58.11.jpeg'
import nshima3 from './assets/WhatsApp Image 2025-06-11 at 19.58.08.jpeg'
import nshima4 from './assets/WhatsApp Image 2025-06-11 at 19.58.10 (1).jpeg'
import nshima5 from './assets/WhatsApp Image 2025-06-11 at 19.58.10.jpeg'
import nshima6 from './assets/WhatsApp Image 2025-06-11 at 19.58.12 (1).jpeg'
import { useState } from 'react'


const datas = [
    {img: burgers1, name: "double", Price:"ZMW120"},
    {img: burgers2, name: "double", Price:"ZMW120"},
    {img: burgers3, name: "double", Price:"ZMW120"},
    {img: burgers4, name: "double", Price:"ZMW120"},
    {img: burgers5, name: "double", Price:"ZMW120"},
    {img: burgers6, name: "double", Price:"ZMW120"},
    {img: burgers7, name: "double", Price:"ZMW120"},
    {img: burgers8, name: "double", Price:"ZMW120"},
    {img: chips1, name: "double", Price:"ZMW120"},
    {img: chips2, name: "double", Price:"ZMW120"},
    {img: chips3, name: "double", Price:"ZMW120"},
    {img: chips4, name: "double", Price:"ZMW120"},
    {img: chips5, name: "double", Price:"ZMW120"},
    {img: chips6, name: "double", Price:"ZMW120"},
    {img: chips7, name: "double", Price:"ZMW120"},
    {img: chips8, name: "double", Price:"ZMW120"},
    {img:  cookies1, name: "double", Price:"ZMW120"},
    {img:  cookies2, name: "double", Price:"ZMW120"},
    {img:  cookies3, name: "double", Price:"ZMW120"},
    {img:  cookies4, name: "double", Price:"ZMW120"},
    {img:  cookies5, name: "double", Price:"ZMW120"},
    {img:  cookies6, name: "double", Price:"ZMW120"},
    {img:  cookies7, name: "double", Price:"ZMW120"},
    {img:  cookies8, name: "double", Price:"ZMW120"},
    {img:  drinks1, name: "double", Price:"ZMW120"},
    {img:  drinks2, name: "double", Price:"ZMW120"},
    {img:  drinks3, name: "double", Price:"ZMW120"},
    {img:  drinks4, name: "double", Price:"ZMW120"},
    {img:  drinks5, name: "double", Price:"ZMW120"},
    {img:  drinks6, name: "double", Price:"ZMW120"},
    {img:  drinks7, name: "double", Price:"ZMW120"},
    {img:  drinks8, name: "double", Price:"ZMW120"},

]
const Add = [
    {img: nshima1, name: "fish"},
    {img: nshima2, name: "meet"},
    {img: nshima3, name: "chiken legs"},
    {img: nshima4, name: "meet"}, 
    {img: nshima5, name: "meet ball"},
    {img: nshima6, name: "chicken"}
]


export function Mainshop(){
    const [Open, setOpen] = useState(false)
    const visible = Open ? datas : datas.slice(0,12)
    return(
        <div className="flex flex-col">
            <div className="flex justify-between bg-black p-5">
                <p className="text-white">All Cartegories</p>
                {datas.length > 1 && <button onClick={()=>{setOpen(!Open)}} className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">{Open ? `show less`: 'show more'} </button>}
            </div>
            <div className="grid grid-cols-2 md:grid md:grid-cols-4 p-2 ">
                {
                    visible.map((item, index)=>(
                        <div key={index} className="flex flex-col items-center hover:bg-orange-500 p-3 rounded-3xl  cursor-pointer">
                            <img src={item.img} className='w-50 rounded-xl h-60' alt="" />
                            <div className="flex flex-col  items-center">
                                <p className='font-serif text-2xl hover:text-white'>{item.name}</p>
                                <p className='font-serif text-2xl hover:text-white'>{item.Price}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
            <div className="flex p-2 justify-center items-center flex-col bg-gray-50">
                <p className='text-2xl font-serif'>ZDTreats</p>
                <div className="grid grid-cols-2 justify-center md:flex-row md:flex gap-5">
                    {
                        Add.map((item, index)=>(
                            <div key={index} className="flex-col gap-2 border border-orange-400 hover:bg-orange-500 rounded-2xl p-2">
                                <img src={item.img} className='w-50 cursor-pointer rounded-3xl md:50 h-50' alt="" />
                                <p className='text-center text-2xl cursor-pointer hover:text-white font-serif'>{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}