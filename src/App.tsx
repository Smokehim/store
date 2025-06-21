import { Navbar } from './componets/navbar'
import './App.css'
import { Cards } from './componets/cartegoreis'
import { Cartegories } from './componets/cards'
import { Footer } from './componets/footer'
import {Main} from './componets/mainbar.tsx'
function App() {
  

  return (
    <div className="layout">
      <Navbar/>
      <main>
        <section>
          <Main/>
        </section>
        <section>
          <Cards/>
        </section>
        <section>
          <Cartegories/>
        </section>
     </main>
     <footer>
        <Footer/>
     </footer>
    </div>
  )
}

export default App
