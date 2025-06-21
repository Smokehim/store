import { Navbar } from "./componets/navbar"
import { Footer } from "./componets/footer"

export default function Cart() {
    return(
        <div className="layout">
            <Navbar/>
            <main>
                <section className="flex justify-center">
                    <h1 className="text-5xl font-bold font-serif">Checkout out your food</h1>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}