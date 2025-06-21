import {useState, useContext} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import cookies1 from './assets/WhatsApp Image 2025-06-11 at 19.57.46.jpeg'
import cookies2 from './assets/WhatsApp Image 2025-06-11 at 19.57.47.jpeg'
import cookies3 from './assets/WhatsApp Image 2025-06-11 at 19.57.48.jpeg'

import chips1 from './assets/WhatsApp Image 2025-06-11 at 19.58.02.jpeg'
import chips2 from './assets/WhatsApp Image 2025-06-11 at 19.58.02.jpeg'

import drinks1 from './assets/WhatsApp Image 2025-06-11 at 19.58.20.jpeg'
import drinks2 from './assets/WhatsApp Image 2025-06-11 at 19.58.22.jpeg'
import burgers2 from './assets/WhatsApp Image 2025-06-11 at 19.58.36.jpeg'


import { drinkContext } from "./drinks";
import { chipContext } from "./chips";
import { BurgerContext } from "./burgers";
import {CookieContext} from './cookies'
import { PizzaContext } from "./pizza";
import { ReduceContext } from "./reduce/contextReduce";


 const AllCategories = [
    {names: chips1, name: 'Chips 1', price: 'ZMW 120'},
    {names: drinks1, name: 'Drink 1', price: 'ZMW 120'},
    {names: cookies1, name: 'Cookies 1', price: 'ZMW 120'},
    {names: drinks2, name: 'Drink 2', price: 'ZMW 130'},
    {names: drinks1, name: 'Burger 1', price: 'ZMW 120'},
    {names: chips2, name: 'Chips 2', price: 'ZMW 130'},
    {names: cookies2, name: 'Cookies 2', price: 'ZMW 130'},
    {names: burgers2, name: 'Burger 2', price: 'ZMW 130'},
    {names: cookies3, name: 'Cookies 3', price: 'ZMW 140'},
 ]


export function Menues(){
    const { dispach } = useContext(ReduceContext)
    const { Burger } = useContext(BurgerContext)
    const { Drinks } = useContext(drinkContext)
    const { Chips } = useContext(chipContext)
     const { Cookie } = useContext(CookieContext)
     const { pizzas } = useContext(PizzaContext)
    const [selected , SelectedAll] = useState('Categories')

    return(
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-serif">Our Menu</h1>
                <ul className="flex gap-5 p-2">
                    <li onClick={()=>SelectedAll('Categories')} className="text-black font-sans hover:text-gray-600 cursor-pointer hover:border-black hover:p-2 hover:rounded-xl hover:bg-black">All Categories</li>
                    <li onClick={()=>SelectedAll('Chips')} className="text-black font-sans hover:text-gray-600 cursor-pointer hover:border-black hover:p-2 hover:rounded-xl hover:bg-black">Chips</li>
                    <li onClick={()=>SelectedAll('Drinks')} className="text-black font-sans hover:text-gray-600 cursor-pointer hover:border-black hover:p-2 hover:rounded-xl hover:bg-black">Drinks</li>
                    <li onClick={()=>SelectedAll('Pizza')} className="text-yellow-500 font-sans hover:text-gray-600 cursor-pointer hover:border-black hover:p-2 hover:rounded-xl hover:bg-black">Pizzas</li>
                    <li onClick={()=>SelectedAll('Burgers')} className="text-black font-sans hover:text-gray-600 cursor-pointer hover:border-black hover:p-2 hover:rounded-xl hover:bg-black">Burger</li>
                    <li onClick={()=>SelectedAll('Cookies')} className="text-black font-sans hover:text-gray-600 cursor-pointer hover:border-black hover:p-2 hover:rounded-xl hover:bg-black">Cookies</li>
                    
                </ul>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 bg-gray-800 gap-5 p-5">
                    {selected === 'Cookies' && (
                        Cookie.map((items, index)=>(
                        <div key={index} className="flex flex-col items-center bg-black rounded-b-xl shadow-2xl    cursor-pointer text-white">
                            <img src={items.cookie} className='w-full h-50 rounded-bl-3xl rounded-lg' alt="" />
                            <div className="flex flex-col gap-2 p-2">
                                <p>{items.name}</p>
                                <div className="flex gap-5 items-baseline">
                                    <p className='font-serif'>{items.price} </p>
                                    <FontAwesomeIcon className="hover:text-yellow-300" icon={faShoppingCart}/>
                                </div>
                                <button onClick={()=>{dispach({type: 'Add', items:items})}} className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now </button>
                           </div>
                        </div>
                    ))
                   )}
                   {selected === 'Burgers' && (
                        Burger.map((items, index)=>(
                        <div key={index} className="flex flex-col items-center bg-black rounded-b-xl shadow-2xl    cursor-pointer text-white">
                            <img src={items.burger} className='w-full h-50 rounded-bl-3xl rounded-lg' alt="" />
                            <div className="flex flex-col gap-2 p-2">
                                <p>{items.name}</p>
                                <div className="flex gap-5 items-baseline">
                                    <p className='font-serif'>{items.price} </p>
                                    <FontAwesomeIcon onClick={()=>{dispach({type: 'Add', items:items})}} className="hover:text-yellow-300" icon={faShoppingCart}/>
                                </div>
                                <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now </button>
                           </div>
                        </div>
                    ))
                   )}
                   {selected === 'Chips' && (
                        Chips.map((items, index)=>(
                        <div key={index} className="flex flex-col items-center bg-black rounded-b-xl shadow-2xl    cursor-pointer text-white">
                            <img src={items.chips} className='w-full h-50 rounded-bl-3xl rounded-lg' alt="" />
                            <div className="flex flex-col gap-2 p-2">
                                <p>{items.name}</p>
                                <div className="flex gap-5 items-baseline">
                                    <p className='font-serif'>{items.price} </p>
                                    <FontAwesomeIcon className="hover:text-yellow-300" icon={faShoppingCart}/>
                                </div>
                                <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now </button>
                           </div>
                        </div>
                    ))
                   )}
                   {selected === 'Drinks' && (
                        Drinks.map((items, index)=>(
                        <div key={index} className="flex flex-col items-center bg-black rounded-b-xl shadow-2xl    cursor-pointer text-white">
                            <img src={items.drink} className='w-full h-50 rounded-bl-3xl rounded-lg' alt="" />
                            <div className="flex flex-col gap-2 p-2">
                                <p>{items.name}</p>
                                <div className="flex gap-5 items-baseline">
                                    <p className='font-serif'>{items.price} </p>
                                    <FontAwesomeIcon className="hover:text-yellow-300" icon={faShoppingCart}/>
                                </div>
                                <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now </button>
                           </div>
                        </div>
                    ))
                   )}
                   {selected === 'Categories' && (
                        AllCategories.map((items, index)=>(
                        <div key={index} className="flex flex-col items-center bg-black rounded-b-xl shadow-2xl    cursor-pointer text-white">
                            <img src={items.names} className='w-full h-50 rounded-bl-3xl rounded-lg' alt="" />
                            <div className="flex flex-col gap-2 p-2">
                                <p>{items.name}</p>
                                <div className="flex gap-5 items-baseline">
                                    <p className='font-serif'>{items.price} </p>
                                    <FontAwesomeIcon className="hover:text-yellow-300" icon={faShoppingCart}/>
                                </div>
                                <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now </button>
                           </div>
                        </div>
                    ))
                   )}
                   {selected === 'Pizza' && (
                        pizzas.map((items, index)=>(
                        <div key={index} className="flex flex-col items-center bg-black rounded-b-xl shadow-2xl    cursor-pointer text-white">
                            <img src={items.pizza1} className='w-full h-50 rounded-bl-3xl rounded-lg' alt="" />
                            <div className="flex flex-col gap-2 p-2">
                                <p>{items.name}</p>
                                <div className="flex gap-5 items-baseline">
                                    <p className='font-serif'>{items.price} </p>
                                    <FontAwesomeIcon className="hover:text-yellow-300" icon={faShoppingCart}/>
                                </div>
                                <button className="border text-black border-yellow-400 shadow-lg hover:border-gray-400 bg-yellow-400 cursor-pointer hover:text-white p-2 w-40 rounded-2xl">Order now </button>
                           </div>
                        </div>
                    ))
                   )}
            </div>
        </div>
    )
}