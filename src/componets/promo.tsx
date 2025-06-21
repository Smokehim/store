import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import cookies6 from './assets/WhatsApp Image 2025-06-11 at 19.57.50.jpeg'
import burgers2 from './assets/WhatsApp Image 2025-06-11 at 19.58.36.jpeg'


const datas =[
    {image: cookies6, day: "cookies", off: "20% off"},
    {image: burgers2, day: "burgers", off: "15% off"},
    
]
export function Promo() {

    return (
        <div className="flex-col space-y-5 flex md:flex md:flex-row p-3 justify-center items-center md:gap-5">
            {datas.map((item, index) => (
                <div key={index} className="flex md:-col bg-black shadow-2l rounded-lg text-white p-3 justify-center items-center  gap-5">
                    <img src={item.image} className="w-30 h-30 rounded-full" alt="" />
                    <div className="flex flex-col justify-center items-left">
                        <p>{item.day}</p>
                        <h1>{item.off}</h1>
                        <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now <FontAwesomeIcon icon={faShoppingCart}/></button>
                    </div>
                </div>
            ))}
        </div>
    )
}