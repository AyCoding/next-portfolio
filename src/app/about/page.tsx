import Link from "next/link";
import {ExternalLink} from "lucide-react";


export const metadata = {
    title: 'Aymeric DE LANGE - A propos de moi',
    description: 'Bonjour, je suis Aymeric, développeur front-end passionné par la programmation web depuis 2018. Au fil des années, j\'ai acquis une solide expérience en développement web front-end, ce qui m\'a permis de créer divers projets intéressants. Je vous invite à découvrir mes projets ci-dessous. N\'hésitez pas à me contacter si vous avez des questions ou si vous êtes intéressé par une collaboration.',
}

export default function About() {
    return (
        <div
            className="container max-w-[1200px] mx-auto pb-[40px] px-5 md:px-2 sm:flex sm:flex-col sm:justify-center sm:h-screen">
            <p className="text-5xl font-black py-6">Qui suis-je ?</p>

            <section className="w-full h-52 py-5 md:rounded-3xl">
                <p className="text-xl text-gray-700">
                    Bonjour, je suis Aymeric DE LANGE, 20 ans, développeur front-end passionné par la programmation web
                    depuis 2018. Actuellement en <span className="font-medium">BTS Services informatiques aux organisations option B solutions
                    logicielles et applications métiers (SIO SLAM)</span>. Je vous invite à découvrir mes projets.
                    N&apos;hésitez pas à me contacter si vous avez des questions ou si vous êtes intéressé par une
                    collaboration.
                </p>

                <div className="flex flex-col mt-5">
                    <Link href="/files/Aymeric%20DE%20LANGE%20-%20CV.pdf" target="_blank" rel="noreferrer"
                          className="hover:translate-x-1 transition-transform text-xl font-medium flex gap-2"
                    >
                        <ExternalLink/>
                        Curriculum vitæ
                    </Link>
                </div>
            </section>
        </div>
    )
}