import React from 'react'



type Props = {
 label: string, 
 id?: string 
 icon?: boolean,
 image?: any,
 view?: () => void,
 [x: string]: any
}

const Input = ( {label, id, icon, view, image, ...other} : Props) => {
    return (
    <div className='flex h-fit w-auto justify-center items-center gap-x-[20px]'>

            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
            <input {...other} id="helper-text" aria-describedby="helper-text-explanation" className=" border border-green-50 text-gray-900 text-sm rounded-lg h-[50px] w-[80%] p-2.5 outline-none dark" placeholder="name@flowbite.com"/>
            {/* I hate using absolute and all these props, if you have a better suggestion for it let me know and we can sit and run through it so that maybe I see where I went wrong. */}
            {icon ? <span onClick={view} className='flex  absolute right-[8.7%] h-6 aspect-[1/1] cursor-pointer '><img className='h-50 w-50' src={image} alt="Eye"/></span> : null}
    </div>
            )
}

export default Input