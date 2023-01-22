import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import Input from '@/components/input/Input'
import Button from '@/components/buttons/Button'
import Eye from "../../assets/Eye.svg"
import Blind from "../../assets/Blind.svg"

type loginInformation = {
  [key: string]: string
};

const defaultFormValues: loginInformation = {
  Email: '',
  Password: ''
};

type Props = {}

// TODO FOR LOGIN: 

// 1. OnChange handler that checks if values are correct 
// 2. Regex for email and Password 
// 3. Tooltip for Login? 
// 4. Forgot password and password reset 
// 5. onClick handler to check DB for userInfo. 
// 6. Using States for errors? 

const Login = (props: Props) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const {Email, Password} = formValues;

  // Form onChange Handler 

  const CaptureValues = (e: React.FormEvent<HTMLInputElement>) =>{
    const {name, value} = e.currentTarget
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(name === "Email"){
      const emailCheck = emailRegex.test(value)

    }

    setFormValues({...formValues, [name]: value})
    console.log(value)
  }

  return (
    <div className={`flex flex-col space-y-auto p-7 bg-white drop-shadow-lg border-2 w-[50%] h-4/6 rounded-lg`}>
      <div className=" flex items-center justify-center flex-col ">
        <img src={Logo} alt="Logo" className='w-[40%] aspect-auto' />
        <h2 className='font-medium leading-tight text-4xl mt-4 mb-4'>Login</h2>
      </div>

      <div className='flex flex-col items-right mt-5 gap-y-[30px]'>
        <Input
          // I Know that &nbsp; is not a good practice and its not ideal, its just there for now so that I could line up those input fields. 
          label="Email &nbsp; &nbsp;  &nbsp;  &nbsp;  "
          type="Email"
          name="Email"
          value= {Email}
          required={true}
          onChange={CaptureValues}
        />
        <Input
          label="Password"
          type={viewPassword ? "text" : "Password"}
          name="Password"
          value= {Password}
          required={true}
          view={() => { setViewPassword((prev) => !prev) }}
          icon={true}
          image={viewPassword ? Blind : Eye}
          onChange={CaptureValues}
        />
        <div className="flex justify-center flex-col items-center gap-y-[15px]">
          <Button
            buttonType='primary'
            buttonText='Login user'
          />
          <p>Dont have an account? <span>Register here</span></p>
          <Button
            buttonType='secondary'
            buttonText='Register user'
          />
        </div>
      </div>

    </div>
  )
}

export default Login