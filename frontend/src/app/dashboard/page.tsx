"use client";
import { getToken,logoutUser } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import { useRouter } from'next/navigation';  
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface JwtPayload {
    sub: number; username: string; nickname: string;role: string; exp: number; iat: number;
}

export default function DashboardHome() {
    const router = useRouter();
    const token = getToken();
    let username = 'Guest';
    let nickname = "";

    if (token) {
        try {
        const decoded = jwtDecode<JwtPayload>(token);
    
    if (decoded.username) {
        username = decoded.username;
    }
    if (decoded.nickname) {
        nickname = decoded.nickname;
    } 
    }catch (e) {
        console.error("Token decoding failed:", e);
    }        
}

  function logout() {
    logoutUser();
    router.push("/login");
  }
  // && `(${nickname})`
return ( 
    <div className="grid items-center">
        <div className="p-4 w-full flex justify-between items-center bg-lime-300"> 
            <h2 className="text-[25px] font-bold mb-2 w-full text-center">Welcome,<span className="bg-red-300 text-black px-2 rounded">{username}
                </span>the pogi</h2> 
           <Button variant="destructive" onClick={logout}>Log out</Button>
        </div>
      <div className="pt-40">
        {token && (
          <>
            <h2 className="text-center font-bold" >Your Bearer Token:</h2>
            <pre className="p-2 bg-slate-100 text-xs mt-2 text-center">{token}</pre> 
          </>
    )}
    </div>


    <footer className="mt-50">
  <div className="bg-black text-white py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-6 md:mb-0">
        <span className="font-bold text-xl">● Elychi</span>
      </div>

      <nav className="flex space-x-6 text-sm opacity-80">
        <a href="#">Lazy bones</a>
        <a href="#">Food</a>
        <a href="#">Game is life</a>
        <a href="#">Anime</a>
        <a href="#">Lack of sleep</a>
      </nav>

      <button className="mt-6 md:mt-0 border px-4 py-2 rounded-lg">Just a button</button>
    </div>

    <p className="text-center text-xs text-gray-400 mt-6">Copyright © 2025. All rights reserved.</p>
  </div>
    </footer>
    </div>
  );
}