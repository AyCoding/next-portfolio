import Link from "next/link";
import {ExternalLink} from "lucide-react";

export default function About() {
    const LINKS = [
        {id: 1, name: "LinkedIn", url: "https://www.linkedin.com/in/aymeric-de-lange-4333a924b/"},
        {id: 2, name: "GitHub", url: "https://github.com/AyCoding"},
    ]

    return (
        <div className="container mx-auto">
            <p className="text-5xl font-black py-6">Discover me</p>

            <section className="w-full h-52 py-5 md:rounded-3xl">
                <p className="text-xl text-gray-700">
                    Hi, I&apos;m Aymeric, front-end developer with a passion for web programming since 2018. Over the
                    years,
                    I&apos;ve gained solid experience in front-end web development, which has enabled me to create
                    various
                    interesting projects. I invite you to discover my projects below. Don&apos;t hesitate to contact me
                    if
                    you have any questions or are interested in collaborating.
                </p>

                <div className="py-5">
                    {LINKS.map(link => (
                        <Link href={link.url}
                              target="_blank" rel="noreferrer"
                              className="flex gap-1 items-center font-medium text-2xl hover:text-gray-700 transition-all"
                              key={link.id}
                        >
                            <ExternalLink/>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}