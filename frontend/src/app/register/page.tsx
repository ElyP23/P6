'use client'
import { useRouter } from'next/navigation'; 
import { useState } from 'react';

import { API_BASE } from '@/lib/config';

import { FormEvent } from 'react';

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

export default function Register(){

   const router = useRouter();
      const [email,setEmail] = useState('');
      const [username,setUsername] = useState ('');
      const [nickname,setNickname] = useState ('');
      const [password,setPassword] = useState('');
      const [error,setError] = useState('');

      async function handleRegister(e: FormEvent) {
        e.preventDefault();
        setError(''); 
      
      const res = await fetch(`${API_BASE}/auth/register`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ username,email, password, nickname }),   
      });

      const data = await res.json();
        if (!res.ok) {
          setError(data.message || 'Register Failed');
          return;
        }

      router.push('/login');
      }
    return(
      <div className="pt-6 pl-6 pb-6 grid grid-cols-2 gap-4 min-h-screen">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle><h2 className="text-3xl text-left font-bold mb-4">Sign Up</h2></CardTitle>
        <CardDescription>
          Enter your email below to Register
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={()=> router.push('/login')}> Log In </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col gap-6">


            <div className="grid gap-2">
              <Label htmlFor="Username">Username</Label>
              <Input value={username} onChange={(e)=>
                setUsername(e.target.value)}
                type="text"
                placeholder="Ex: Ely"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="Username">Nickname</Label>
              <Input value={nickname} onChange={(e)=>
                setNickname(e.target.value)}
                type="text"
                placeholder="Ex: Pogi"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input value={email} onChange={(e)=>
                setEmail(e.target.value)}
                //id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>


            <div className="grid gap-2 pb-6">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input //id="password" 
                placeholder="********" 
                value={password} onChange={(e)=> setPassword(e.target.value)}
                type="password" required />
                {error && (<p className="text-red-500 text-sm">{error}</p>)}
            </div>

          </div>
          <Button type="submit" className="w-full bg-lime-200 text-black-500">
            Sign Up
          </Button>
        </form>
      </CardContent>

      <CardFooter className="pt-2 flex-col gap-2">
    
        <Button variant="outline" className="w-full">
          Or Sign Up with Google
        </Button>
      </CardFooter>

    </Card>

<div className="w-full h-full">
        <img
          src="/pictures/pic.png"
          className="w-full h-full object-cover rounded-xl"
          alt="Right Side Image"
        />
</div>

    </div>
  );
}
