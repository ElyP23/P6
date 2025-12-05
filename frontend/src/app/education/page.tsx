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


<section className="w-full">
    <div className="max-w-7xl mx-auto px-6">
     <div className="bg-gray-200 rounded-2xl p-10">
      <h2 className="text-3xl text-center font-bold mb-4">Education & Growth</h2>
      <p className="text-center text-gray-700">
    My journey is built on a foundation of continuous learning, formal education and a mix of laziness to balance. 
    Originally from NCR of Taguig. I grew in a avarag family with friends by my side, the only kind that was
    not avarag is the fact my classmates in elementary school are genuises like they can solve high school algebra 
    in seconds while being 7 years old. Though I was one of them but my Mother don't like the idea of me not enjoying my youth studying math and competing.
    So now I'm a avarage Joe in the Bikol region.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

        <div className="bg-white border border-gray-300 rounded-xl p-5 flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="font-semibold text-lg">Silangan Elementary School - Taguig - 2011-2017</span>
        </div>
          <div className="bg-white border border-gray-300 rounded-xl p-5 flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="font-semibold text-lg">Huckleberry Monterssori School - Taguig - 2017-2018</span>
          </div>

         <div className="bg-white border border-gray-300 rounded-xl p-5 flex items-center gap-3 hover:shadow-lg transition cursor-pointer">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
              <span className="font-semibold text-lg">Naga College Foundation, Inc- Naga City - 2018-present</span>
         </div>

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