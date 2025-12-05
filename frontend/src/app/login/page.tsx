'use client'
import { useRouter } from'next/navigation'; 
import { useState } from 'react';
import { saveToken } from '@/lib/auth';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { API_BASE } from '@/lib/config';

import { FormEvent } from 'react';

export default function login (){
  
      const router = useRouter();
      const [username,setUsername] = useState('');
      const [password,setPassword] = useState('');
      const [error,setError] = useState('');

      async function handleLogin(e: FormEvent) {
        e.preventDefault();
        setError('');

        console.log("API_BASE:", API_BASE);

      
      const res = await fetch(`${API_BASE}/auth/login`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),   
        
      });

      const data = await res.json();
      //display status
      console.log(res.status, data)
      console.log('STATUS:', res.status);
      console.log('DATA:', data);
        if (!res.ok || !data.accessToken) {
            setError(data.message || 'Invalid credentials');
        return; 
  }

      saveToken(data.accessToken);
        router.push('/dashboard');
      }

  return(

      <div className="pt-6 pl-6 pb-6 grid grid-cols-2 gap-4 min-h-screen">
    <Card className="w-full max-w-sm ">
      <CardHeader>
    <CardTitle><h2 className="text-3xl text-left font-bold mb-4">Login</h2></CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={()=>router.push('/register')}>Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit = {handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} 
                //id="email"
                type="text"
                placeholder="juan dela cruz"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input 
               //id="password"
               type="password" placeholder="********" 
               value={password} onChange={(e) => setPassword(e.target.value)} 
               required /> 
               {error && (<p className="text-red-500 text-sm">{error}</p>)}
            </div>
          </div>

          <Button type="submit" className="w-full bg-lime-200 text-black-500">
          Login
        </Button>

        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>

    <div className="w-full h-full">
  <img 
    src="/pictures/pic.png" 
    className="w-full h-full object-cover rounded-xl" 
    alt="Image"
  />
  </div>

    </div> 

      
    );
}