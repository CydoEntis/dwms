import React from 'react';

type buttonTypes = {
    [key:string]:string 
}

const btnTypes : buttonTypes = {
    primary: 'bg-yellow-50 hover:bg-yellow-500 text-white font-bold  p-3  w-fit rounded text-sm text-white ',
    secondary: 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded',
    tertiary: 'tertiary',
    success: 'success',
    warning: 'warning'
}

type Props = {
    buttonType : string,
    buttonText: string,
    [x: string]: any
}

const Button = ({buttonType, buttonText, ...other}: Props) => {
  return (
    <div className={`${btnTypes[buttonType]} cursor-pointer`} {...other}>
            <p>{`${buttonText}`}</p>
    </div>
  )
}

export default Button