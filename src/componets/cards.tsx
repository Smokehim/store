import cookies from './assets/WhatsApp Image 2025-06-11 at 19.57.47 (1).jpeg'
import chips from './assets/WhatsApp Image 2025-06-11 at 19.58.36.jpeg'
import drinks from './assets/WhatsApp Image 2025-06-11 at 19.58.21.jpeg'
import burgers from './assets/WhatsApp Image 2025-06-11 at 19.58.34.jpeg'
import pizza from './assets/WhatsApp Image 2025-06-11 at 19.58.16.jpeg'
import tackes from './assets/WhatsApp Image 2025-06-11 at 19.58.31.jpeg'
import nshima from './assets/WhatsApp Image 2025-06-11 at 19.58.12.jpeg'
import robster from './assets/WhatsApp Image 2025-06-11 at 19.58.28.jpeg'
import plater from './assets/WhatsApp Image 2025-06-11 at 19.58.32 (1).jpeg'
const datas = [
    {image: cookies, name: "cookies"},
    {image: drinks, name: "drinks"},
    {image: chips, name: "chips"},
    {image: burgers, name: "burgers"},
    {image: pizza, name: "pizza"},
    {image: tackes, name: "taackes"},
    {image: nshima, name: "nshima"},
    {image: robster, name: "robster"},
    {image: plater, name: "plater"},
    {image: plater, name: "nshima"},

]


export function Cartegories(){

    return(
        <div  className='flex flex-col gap-5 pt-5'>
            <div className='flex justify-left items-center p-5 white'>
                <p className='text-3xl'>Categories</p>
            </div>
            <div className="grid grid-cols-2 justify-center items-center s md:grid-cols-3 bg-gray-800 gap-5 p-8">
            {
                datas.map((item, index)=>(
                    <div key={index} className="flex flex-col  items-center p-4 w-60 rounded-2xl bg-black md:p-5 md:w-80  cursor-pointer text-white">
                        <img src={item.image} className='md:w-50 w-60 h-60 md:h-50 rounded-3xl' alt="" />
                        <p  className='font-serif text-xl hover:text-gray-500'>{item.name}</p>
                    </div>
                ))
            }
           </div>
        </div>
    )
}