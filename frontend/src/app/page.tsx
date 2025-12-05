import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Link href="home"><Button variant="link">Don't click</Button></Link>
        <Link href="login"><Button variant="link">Login</Button></Link>
    </div>
  );
}
