import Link from "next/link";
import {ExternalLink, Github, Linkedin, Mail} from "lucide-react";

export const metadata = {
    title: 'Aymeric DE LANGE - Contact',
    description: 'Contactez-moi !',
}

export default function Contact() {
    const LINKS = [
        {id: 1, provider:"email", name: "aymericdelange80@gmail.com", url: "mailto:aymericdelange80@gmail.com"},
        {id: 2, provider:"linkedin", name: "Aymeric DE LANGE", url: "https://www.linkedin.com/in/aymeric-de-lange/"},
        {id: 3, provider:"github", name: "AyCoding", url: "https://github.com/AyCoding"},
    ]

    const getIcon = (name: string) => {
        switch (name) {
            case "email":
                return <Mail/>;
            case "linkedin":
                return <Linkedin/>;
            case "github":
                return <Github/>;
            default:
                return <ExternalLink/>;
        }
    }



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
                                {getIcon(link.provider)}
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}