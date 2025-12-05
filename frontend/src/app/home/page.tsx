import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function home (){

    return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">

  <div className="w-full py-4">
    <div className="grid grid-cols-3 items-center">

      <div className="pl-4">
        <span className="font-bold text-xl">● Elychi</span>
      </div>
     
      <div className="flex justify-center gap-6">
      <Link href="home"><Button className="font-bold" variant="link">Home</Button></Link>
      <Link href="education"><Button variant="link">Education</Button></Link>
      <Link href="hobbies"><Button variant="link">Hobbies</Button></Link>
      <Link href="about"><Button variant="link">About</Button></Link>
      <Link href="contact"><Button variant="link">Contact</Button></Link>
      </div>
      <div></div>

    </div>
  </div>

  <section className="mt-2">
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative bg-[#C4FF5A] rounded-xl p-14 shadow-lg overflow-hidden">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="pb-4 text-[25px] font-bold">
            Hi there I'm Elie, A Student of Naga College Foundation taking Bachelor in Information Technology  
          </h1>
          <p>
            Welcome to my digital space where should represent me with passion. 
            Follow my journey through learning to code,
            eating, and everything in between.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="flex justify-center p-10">
    <Button className="rounded-full bg-black text-white  hover:shadow-lg transition cursor-pointer">
      Learn more</Button>
  </div>

  <section className="w-full">
    <div className="max-w-7xl mx-auto px-6">
     <div className="bg-gray-200 rounded-2xl p-10">
      <h2 className="text-3xl text-center font-bold mb-4">Tech Stack</h2>
      <p className="text-center text-gray-700">
        This website is made using NextJS, TailwindCSS, React (not yet) and components of shadcn.ui (though the buttons are the ones I have used lol).
        And many many challenges where made in making the website include not limited too:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

        <div className="bg-white border border-gray-300 rounded-xl p-5 flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="font-semibold text-lg">I forgot the basics of CSS</span>
        </div>
          <div className="bg-white border border-gray-300 rounded-xl p-5 flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="font-semibold text-lg">Redesigning SIAS in figma became the priority</span>
          </div>

         <div className="bg-white border border-gray-300 rounded-xl p-5 flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span className="font-semibold text-lg">Turtle Laptop</span>
         </div>

      </div>
    </div>
  </div>
</section>

<section className="w-full py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center leading-tight">
      Thanks to patience and a loving girlfriend the laptop was<span className="bg-red-400 px-2 rounded">spared</span> from me.
      Anyways thanks for viewing this site.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      <div className="bg-black text-white p-6 rounded-xl">
        <p className="font-semibold mb-3">I hate creatives yet here I'am</p>
      </div>

      <div className="bg-lime-300 text-black p-6 rounded-xl">
        <p className="font-semibold mb-3">
          I want to learn Python and Go but... design
        </p>
      </div>

      <div className="bg-white border border-gray-300 p-6 rounded-xl">
        <p className="font-semibold mb-3">
          I have survived the semester in designing in figma
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <p className="font-bold text-xl leading-tight">
          …if that doesn't prove that I like design,<br />
          then <span className="bg-lime-300 px-2 rounded">what?</span>
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

    );
     
}

