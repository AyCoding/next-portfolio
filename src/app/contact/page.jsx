import Link from "next/link";
import {ExternalLink} from "lucide-react";

export const metadata = {
    title: 'Aymeric DE LANGE - Contact',
    description: 'Contactez-moi !',
}

export default function Contact() {
    const LINKS = [
        {id: 1, name: "aymericdelange80@gmail.com", url: "mailto:aymericdelange80@gmail.com"},
        {id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/aymeric-de-lange-4333a924b/"},
        {id: 3, name: "GitHub", url: "https://github.com/AyCoding"},
        {id: 4, name: "Twitter", url: "https://twitter.com/@Ertinox08Gaming"},
    ]
    return (
        <>
            <div className="container max-w-[1200px] mx-auto pb-[40px] px-5 md:px-2 h-screen flex flex-col justify-center">
                <h1 className="text-5xl font-black py-6 perso uppercase">Contact</h1>

                <section className="container flex justify-between border-t-2 border-black">
                    <div className="flex flex-col mt-5">
                        {LINKS.map(link => (
                            <Link href={link.url} target="_blank" rel="noreferrer"
                                  className="hover:translate-x-1 transition-transform text-xl font-medium flex gap-2"
                                  key={link.id}
                            >
                                <ExternalLink/>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}