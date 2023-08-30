import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function Home() {
  return (
      <div className="max-w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black uppercase">
          Hello, I am <span className="perso">Aymeric DE LANGE</span>,
        </h1>
        <p className="font-medium text-xl mb-5">I&apos;m a Front-end Developer.</p>
        <Link href={"/about"} className="flex gap-1 font-medium hover:translate-x-1 transition-transform">
          <ArrowRight/>
          About me
        </Link>
      </div>
  )
}
