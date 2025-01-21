"use client"

import { useState } from 'react';
import { Input, Button, Spacer } from '@nextui-org/react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useRouter } from 'next/navigation'


export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const  handleLogin = async () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
    router.push('/landing')
     await fetch(`https://api.vercel.app/blog`, {
      cache: 'force-cache',
    }).then((res)=>{
      console.log('res :>> ', res);
      if (res && res.status ===200){

        try {      
          window.localStorage.setItem("token", token)
          window.localStorage.setItem("refreshToken", refreshToken)
          
        } catch (error) {
          console.error('Error setting localStorage', error)
        }
    
        router.push('/landing')
    }
  }).catch((error)=>{console.error("error in catch",error)})

  
    

    
  };

  return (
    <Card style={{ width: '400px', padding: '20px' }}>
      <CardBody>

         <p className="text-white flex justify-center py-2">ورود به پرتال توسعه دهندگان</p> 
        <Input
          type="email"
          label="نام کاربری"
          variant="bordered"
          defaultValue=""
          isInvalid={false}
          errorMessage="شماره پرسنلی"
          className="max-w-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />

        <Spacer y={1} />

        <Input
          label="رمزعبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          variant="bordered"
          //placeholder="رمز عبور خود را وارد نمایید"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />

        <Spacer y={1} />

        <Button
          color="primary"
          onClick={handleLogin}
          style={{ width: '95%', marginTop: '10px' }}
          disabled={!email || !password}
          className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
        >
          ورود
        </Button>
      </CardBody>

      <CardFooter style={{ display: 'flex', justifyContent: 'center' }}>
     

        {/* <p className="font-bold text-inherit">رمز عبور خود را فراموش کرده اید؟
          <br/>
          <a href="/signup">بازیابی رمزعبور</a>
        </p> */}
      </CardFooter>
    </Card>

  );
}
