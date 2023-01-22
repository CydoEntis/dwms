import React, { useState } from "react";
import Input from "@/components/input/Input";
import Button from "@/components/buttons/Button";
import Login from "@/features/login/login";
// import Register from "@/features/register/Register";

type Props = {
 
};

const Authentication = (props: Props) => {
  const [register, setRegister] = useState<boolean>(false);

  return(
   <div className="flex justify-center h-screen items-center">
   {
    register
    ?
    // <Register/>
    null
    :
    <Login/>
   }
   {/* <Button
    buttonType="primary"
    buttonText="Register user"
    onClick= {() => {setRegister(prev => !prev)}}
   /> */}
   </div>
  );
};

export default Authentication;
