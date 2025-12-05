import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function contact (){

    return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">

   <div className="w-full py-4">
    <div className="grid grid-cols-3 items-center">

      <div className="pl-4">
        <span className="font-bold text-xl">● Elychi</span>
      </div>
     
      <div className="flex justify-center gap-6">
      <Link href="home"><Button variant="link">Home</Button></Link>
      <Link href="education"><Button variant="link">Education</Button></Link>
      <Link href="hobbies"><Button variant="link">Hobbies</Button></Link>
      <Link href="about"><Button className="font-bold" variant="link">About</Button></Link>
      <Link href="contact"><Button variant="link">Contact</Button></Link>
      </div>
      <div></div>

    </div>
  </div>


<div className="bg-lime-300 border border-gray-300 p-6 rounded-xl pl-14">
   <h2 className="text-3xl font-bold text-left leading-tight">
   About Me
    </h2>
    <div className="p-6">
        <p className="font-semibold mb-3">
          I have survived the semester in designing in figma. I'm a second year student in Naga College Foundation, Inc.
          I really like animes, games, reading manga, exercising, music, technology design, art (Yes a drew too) as far I don't like designing
          and my family and girlfriend.

          I spend my time really enjoying the things I like but I wish for more time to other hobbies.
          Let's get along and know me better with this half baked website!
        </p>
      </div>

</div>
<section className="w-full py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center leading-tight">
      I'm quite a introverted guy but can definitely talk and approach to and we might get along. Just don't come for<span className="bg-lime-400 px-2 rounded">money</span>
      I don't have it either. Anyways feel free to explore.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      <div className="bg-black text-white p-6 rounded-xl">
        <p className="font-semibold mb-3">Picture of me </p>
      </div>

      <div className="bg-lime-300 text-black p-6 rounded-xl">
        <p className="font-semibold mb-3">
         Another picture of me
        </p>
      </div>

      <div className="bg-white border border-gray-300 p-6 rounded-xl">
        <p className="font-semibold mb-3">
          ebpereda@gbox.ncf.edu.ph
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <p className="font-bold text-xl leading-tight">
          …It's the best I can find ,<br />
         <span className="bg-lime-300 px-2 rounded">hehe</span>
        </p>
      </div>
    </div>
  </div>
</section>



<footer className="mt-32">
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
    );}