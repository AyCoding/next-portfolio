import Link from "next/link";
import {ArrowRight} from "lucide-react";

export const metadata = {
    title: 'Aymeric DE LANGE - Développeur front-end',
    description: 'Bonjour, je suis Aymeric, développeur front-end passionné par la programmation web depuis 2018. Au fil des années, j\'ai acquis une solide expérience en développement web front-end, ce qui m\'a permis de créer divers projets intéressants. Je vous invite à découvrir mes projets ci-dessous. N\'hésitez pas à me contacter si vous avez des questions ou si vous êtes intéressé par une collaboration.',
    keywords: 'Aymeric, DE LANGE, frontend, react, next',
    robots: 'follow, index'
}

export default function Home() {
  return (
      <div className="max-w-full h-screen mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl font-black uppercase">
          Bonjour, je suis <span className="perso">Aymeric DE LANGE</span>,
        </h1>
        <p className="font-medium text-xl mb-5">Je suis actuellement en licence professionnelle Conception, Rédaction et Réalisation Web de 2024/2025</p>
        <Link href={"/about"} className="flex gap-1 font-medium hover:translate-x-1 transition-transform">
          <ArrowRight/>
            A propos de moi
        </Link>
      </div>
  )
}
