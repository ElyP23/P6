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
      <Link href="about"><Button variant="link">About</Button></Link>
      <Link href="contact"><Button className="font-bold" variant="link">Contact</Button></Link>
      </div>
      <div></div>

    </div>
  </div>

 <section className="mt-2">
    <div className="px-6">
      <div className="relative bg-[#C4FF5A] rounded-xl p-14 shadow-lg overflow-hidden">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="pb-4 text-[25px] font-bold">
            Let's Connect!
          </h1>
          <p>
          Have a question, collaboration idea, or just want to chat about? 
          I'd love to hear from you! Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  </section>


<div className="pl-16 pr-16 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 mb-2">
  <div>
    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

    <form className="space-y-5">

      <div>
        <label className="block mb-1 font-medium">Your Name</label>
        <input
          type="text"
          placeholder="Juan dela Cruz"
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email Address</label>
        <input
          type="email"
          placeholder= "juan@example.com"
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Subject</label>
        <input
          type="text"
          placeholder="What's this about?"
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea rows={4}
          placeholder="Tell me what's on your mind..."
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        className="w-full bg-black text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-900"
      >
        <span>✈</span> Send Message
      </button>

    </form>
  </div>

  <div className="space-y-10">
    <div>
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <div className="bg-lime-400 p-4 rounded-full text-black text-xl">
            📧
          </div>
          <div>
            <p className="font-bold text-lg">Email</p>
            <p className="text-gray-600">ebpereda@gbox.ncf.edu.ph</p>
          </div>
        </div>

      
        <div className="flex items-center gap-4">
          <div className="bg-lime-400 p-4 rounded-full text-black text-xl">
            📍
          </div>
          <div>
            <p className="font-bold text-lg">Location</p>
            <p className="text-gray-600">Naga, Cam Sur, Philippines</p>
          </div>
        </div>

      </div>
    </div>

  
    <div>
      <h2 className="text-2xl font-bold mb-6">Follow Me</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="border rounded-xl p-4 flex items-center gap-4">
          <span className="text-xl">🐦</span>
          <div>
            <p className="font-bold">X</p>
            <p className="text-gray-600">@limotkonaprofile</p>
          </div>
        </div>

        <div className="border rounded-xl p-4 flex items-center gap-4">
          <span className="text-xl">🎮</span>
          <div>
            <p className="font-bold">OSU</p>
            <p className="text-gray-600">@Sasakizaki</p>
          </div>
        </div>

        <div className="border rounded-xl p-4 flex items-center gap-4">
          <span className="text-xl">🐱</span>
          <div>
            <p className="font-bold">GitHub</p>
            <p className="text-gray-600">@gamerprofile</p>
          </div>
        </div>

      </div>
    </div>

  </div>

</div>


<footer className="mt-16">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <div className="mt-10 w-full h-24 border rounded-xl flex items-center justify-center text-gray-400">
    </div>
  </div>

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

      <button className="mt-6 md:mt-0 border px-4 py-2 rounded-lg">Still a button</button>
    </div>

    <p className="text-center text-xs text-gray-400 mt-6">Copyright © 2025. All rights reserved.</p>
  </div>
</footer>

  </div>
);
}