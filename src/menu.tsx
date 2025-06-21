import { Navbar } from "./componets/navbar"
import { Footer } from "./componets/footer"
import { Promo } from "./componets/promo";
import './menu.css';
import { Menues } from "./componets/menues";
import burger from './componets/assets/burger-8983662_1280.jpg'

export function Menu(){
    return(
        <div className="layout">
            <Navbar/>
            <main>
                <section id="main" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-3xl font-bold text-center my-5">Menu</h1>
                    <p className="text-center mb-5">Explore our delicious offerings!</p>
                </section>   
                <section className="flex justify-center">
                    <Promo/>
                </section>    
                <section>
                    <Menues/>
                </section>  
                <section className=" flex-col flex md:flex-row  md:flex gap-5 justify-center items-center ">
                    <img src={burger} className="h-100 w-100 object-cover" alt="" />
                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col ">
                            <h1 className="text-5xl font-bold font-serif">We Are OrderBay</h1>
                            <p className="text-lg">OrderBay the place where you find all your favorite treats</p>
                            <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Expror more </button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="pt-2">
                <Footer/>
            </footer>
        </div>
    )
}