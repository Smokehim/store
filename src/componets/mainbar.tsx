import burger from './assets/WhatsApp Image 2025-06-11 at 19.58.37 (1).jpeg'

export function Main(){
    return(
        <div className='flex'>
            <img src={burger}  className='w-100' alt="" />
            <div className='flex flex-col justify-center'>
                <h1 className='text-5xl font-bold font-serif'>Welcome</h1>
                <p>OrderBay the place your find all your favorite trite</p>
            </div>
        </div>
    )
}