import {  useContext } from "react";
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
import pizza1 from './assets/WhatsApp Image 2025-06-11 at 19.58.33 (1).jpeg'
import pizza2 from './assets/WhatsApp Image 2025-06-11 at 19.58.12 (1).jpeg'
import pizza3 from './assets/WhatsApp Image 2025-06-11 at 19.58.14.jpeg'
import pizza4 from './assets/WhatsApp Image 2025-06-11 at 19.58.15 (1).jpeg'
import pizza5 from './assets/WhatsApp Image 2025-06-11 at 19.58.14 (1).jpeg'
import pizza6 from './assets/WhatsApp Image 2025-06-11 at 19.58.33 (2).jpeg'
import pizza7 from './assets/WhatsApp Image 2025-06-11 at 19.58.16 (1).jpeg'
import pizza8 from './assets/WhatsApp Image 2025-06-11 at 19.58.17 (1).jpeg'
import nshima1 from './assets/WhatsApp Image 2025-06-11 at 19.58.09 (1).jpeg'
import nshima2 from './assets/WhatsApp Image 2025-06-11 at 19.58.11.jpeg'
import nshima3 from './assets/WhatsApp Image 2025-06-11 at 19.58.08.jpeg'
import nshima4 from './assets/WhatsApp Image 2025-06-11 at 19.58.10 (1).jpeg'
import nshima5 from './assets/WhatsApp Image 2025-06-11 at 19.58.10.jpeg'
import nshima6 from './assets/WhatsApp Image 2025-06-11 at 19.58.12 (1).jpeg'


export const Nshima = [
    {img: nshima1, name: "fish"},
    {img: nshima2, name: "meet"},
    {img: nshima3, name: "chiken legs"},
    {img: nshima4, name: "meet"}, 
    {img: nshima5, name: "meet ball"},
    {img: nshima6, name: "chicken"}
]
export const Cookies = [
    {id:0, cookie: cookies1, name: 'Cookies 1', price: 'ZMW 120'},
    {id:1, cookie: cookies2, name: 'Cookies 2', price: 'ZMW 130'},
    {id:2, cookie: cookies3, name: 'Cookies 3', price: 'ZMW 140'},
    {id:3, cookie: cookies4, name: 'Cookies 4', price: 'ZMW 150'},
    {id:4, cookie: cookies5, name: 'Cookies 5', price: 'ZMW 160'},
    {id:5, cookie: cookies6, name: 'Cookies 6', price: 'ZMW 170'},
    {id:6, cookie: cookies7, name: 'Cookies 7', price: 'ZMW 180'},
    {id:7, cookie: cookies8, name: 'Cookies 8', price: 'ZMW 190'},
]
export const Pizza = [
    {pizza1: pizza1, name: 'chicken', price: 'zmw120'},
    {pizza1: pizza2, name: 'cheese', price: 'zmw120'},
    {pizza1: pizza3, name: 'meet', price: 'zmw120'},
    {pizza1: pizza4, name: 'chicken', price: 'zmw120'},
    {pizza1: pizza5, name: 'cheese', price: 'zmw120'},
    {pizza1: pizza6, name: 'meet', price: 'zmw120'},
    {pizza1: pizza7, name: 'chicken', price: 'zmw120'},
    {pizza1: pizza8, name: 'cheese', price: 'zmw120'},
    
]
 export const Burgers = [
    {id:0,burger: burgers1, name: 'Burger 1', price: 'ZMW 120'},
    {id:1,burger: burgers2, name: 'Burger 2', price: 'ZMW 130'},
    {id:2,burger: burgers3, name: 'Burger 3', price: 'ZMW 140'},
    {id:3,burger: burgers4, name: 'Burger 4', price: 'ZMW 150'},
    {id:4,burger: burgers5, name: 'Burger 5', price: 'ZMW 160'},
    {id:5, burger: burgers6, name: 'Burger 6', price: 'ZMW 170'},
    {id:6, burger: burgers7, name: 'Burger 7', price: 'ZMW 180'},
    {id:7, burger: burgers8, name: 'Burger 8', price: 'ZMW 190'},
 ]
 export const Chips = [
    {id:0,chips: chips1, name: 'Chips 1', price: 'ZMW 120'},
    {id:1,chips: chips2, name: 'Chips 2', price: 'ZMW 130'},
    {id:2,chips: chips3, name: 'Chips 3', price: 'ZMW 140'},
    {i:3,chips: chips4, name: 'Chips 4', price: 'ZMW 150'},
    {id:4,chips: chips5, name: 'Chips 5', price: 'ZMW 160'},
    {id:5,chips: chips6, name: 'Chips 6', price: 'ZMW 170'},
    {id:6,chips: chips7, name: 'Chips 7', price: 'ZMW 180'},
    {id:7,chips: chips8, name: 'Chips 8', price: 'ZMW 190'},
 ]
 export const Drink = [
    {id:0,drink: drinks1, name: 'Drink 1', price: 'ZMW 120'},
    {id:1,drink: drinks2, name: 'Drink 2', price: 'ZMW 130'},
    {id:2,drink: drinks3, name: 'Drink 3', price: 'ZMW 140'},
    {id:3,drink: drinks4, name: 'Drink 4', price: 'ZMW 150'},
    {id:4,drink: drinks5, name: 'Drink 5', price: 'ZMW 160'},
    {id:5,drink: drinks6, name: 'Drink 6', price: 'ZMW 170'},
    {id:6,drink: drinks7, name: 'Drink 7', price: 'ZMW 180'},
    {id:7,drink: drinks8, name: 'Drink 8', price: 'ZMW 190'},
 ]
 export const AllCategories = [
    {names: chips1, name: 'Chips 1', price: 'ZMW 120'},

    {names: drinks1, name: 'Drink 1', price: 'ZMW 120'},
    {names: cookies1, name: 'Cookies 1', price: 'ZMW 120'},
    {names: drinks2, name: 'Drink 2', price: 'ZMW 130'},
    {names: burgers1, name: 'Burger 1', price: 'ZMW 120'},
    {names: chips2, name: 'Chips 2', price: 'ZMW 130'},
    {names: cookies2, name: 'Cookies 2', price: 'ZMW 130'},
    {names: burgers2, name: 'Burger 2', price: 'ZMW 130'},
    {names: cookies3, name: 'Cookies 3', price: 'ZMW 140'},
 ]

