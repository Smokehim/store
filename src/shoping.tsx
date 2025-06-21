import { Navbar } from "./componets/navbar"
import {Shoping} from './componets/shopmain'
import { Mainshop } from "./componets/mainshop"
import { Footer } from "./componets/footer"


export default function Shop(){

    return(
        <div className="layout">
            <Navbar/>
            <main>
                <section className="flex flex-col items-center pt-9">
                    <Shoping/>
                </section>
                <section className="">
                    <Mainshop/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}