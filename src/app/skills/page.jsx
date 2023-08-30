import Image from "next/image";

export const metadata = {
    title: 'Aymeric DE LANGE - Skills',
    description: 'Discover my skills',
}

export default function Skills() {
    const TECH = [
        {id: 0, path: "/Logo/LogosGitIcon.svg", alt: "Git"},
        {id: 0, path: "/Logo/LogosVue.svg", alt: "Vue"},
        {id: 0, path: "/Logo/LogosReact.svg", alt: "React"},
        // {id: 0, path: "/Logo/LogosSvelteIcon.svg", alt: "Logo Svelte"},
    ]

    const LANGAGES = [
        {id: 0, path: "/Logo/LogosPython.svg", alt: "Python"},
        {id: 0, path: "/Logo/LogosSass.svg", alt: "Sass"},
        {id: 0, path: "/Logo/LogosJavascript.svg", alt: "JavaScript"},
        {id: 0, path: "/Logo/LogosPhp.svg", alt: "PHP"},

    ]

    const IDE = [
        {id: 1, path: "/Logo/LogosVisualStudioCode.svg", alt: "Visual Studio Code"},
        {id: 2, path: "/Logo/LogosPycharm.svg", alt: "Pycharm"},
        {id: 3, path: "/Logo/LogosPhpstorm.svg", alt: "Phpstorm"},

    ]

    return (
        <div className="container mx-auto">
            <p className="text-5xl font-black py-6">Skills</p>

            <section>
                <div>
                    <div className="mt-5 border-t border-slate-700 my-10">
                        <h1 className="text-4xl font-bold uppercase perso my-5">Technologies</h1>
                        <div className="flex gap-5">
                            {TECH.map(tech => (
                                <div key={tech.id} className="flex flex-col justify-center items-center">
                                    <Image
                                        src={tech.path}
                                        alt={tech.alt}
                                        width={40}
                                        height={40}
                                    />
                                    <span>{tech.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 border-t border-slate-700 my-10">
                        <h1 className="text-4xl font-bold uppercase perso my-5">Langages</h1>
                        <div className="flex gap-5">
                            {LANGAGES.map(langage => (
                                <div key={langage.id} className="flex flex-col justify-center items-center">
                                    <Image
                                        src={langage.path}
                                        alt={langage.alt}
                                        width={40}
                                        height={40}
                                    />
                                    <span>{langage.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 border-t border-slate-700 my-10">
                        <h1 className="text-4xl font-bold uppercase perso my-5">IDE</h1>
                        <div className="flex gap-5">
                            {IDE.map(ide => (
                                <div key={ide.id} className="flex flex-col justify-center items-center">
                                    <Image
                                        src={ide.path}
                                        alt={ide.alt}
                                        width={40}
                                        height={40}
                                    />
                                    <span>{ide.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}