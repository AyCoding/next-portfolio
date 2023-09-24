import Image from "next/image";

export const metadata = {
    title: 'Aymeric DE LANGE - Compétences',
    description: 'Découvrir mes compétences',
}

export default function Skills() {
    const WEB = [
        {id: 1, path: "/Logo/LogosSass.svg", alt: "Sass"},
        {id: 2, path: "/Logo/LogosJavascript.svg", alt: "JavaScript"},
        {id: 3, path: "/Logo/LogosVue.svg", alt: "VueJS"},
        {id: 4, path: "/Logo/LogosReact.svg", alt: "ReactJS"},
        {id: 5, path: "/Logo/LogosNextjsIcon.svg", alt: "NextJS"},
        {id: 6, path: "/Logo/LogosTailwindcssIcon.svg", alt: "TailwindCSS"},
        {id: 7, path: "/Logo/LogosPhp.svg", alt: "PHP"},
    ]

    const IDE = [
        {id: 1, path: "/Logo/LogosVisualStudioCode.svg", alt: "Visual Studio Code"},
        {id: 2, path: "/Logo/LogosPycharm.svg", alt: "Pycharm"},
        {id: 3, path: "/Logo/LogosPhpstorm.svg", alt: "Phpstorm"},

    ]

    const OTHER = [
        {id: 1, path: "/Logo/LogosGitIcon.svg", alt: "Git"},
        {id: 2, path: "/Logo/LogosFigma.svg", alt: "Figma"},
        {id: 3, path: "/Logo/LogosPython.svg", alt: "Python"},
    ]



    return (
        <div className="container mx-auto pb-[40px] px-5 md:px-2">
            <p className="text-5xl font-black py-6">Mes Compétences</p>

            <section>
                <div>
                    <div className="mt-5 border-t border-slate-700 my-10">
                        <h1 className="text-4xl font-bold uppercase perso my-5">WEB</h1>
                        <div className="flex flex-wrap gap-5">
                            {WEB.map(web => (
                                <div key={web.id} className="flex flex-col justify-center items-center">
                                    <Image
                                        src={web.path}
                                        alt={web.alt}
                                        width={60}
                                        height={60}
                                        className={"h-[60px]"}
                                    />
                                    <span className="font-medium mt-2">{web.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-5 border-t border-slate-700 my-10">
                        <h1 className="text-4xl font-bold uppercase perso my-5">Éditeurs</h1>
                        <div className="flex flex-wrap gap-5">
                            {IDE.map(ide => (
                                <div key={ide.id} className="flex flex-col justify-center items-center">
                                    <Image
                                        src={ide.path}
                                        alt={ide.alt}
                                        width={60}
                                        height={60}
                                        className={"h-[60px]"}
                                    />
                                    <span className="font-medium mt-2">{ide.alt}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5 border-t border-slate-700 my-10">
                    <h1 className="text-4xl font-bold uppercase perso my-5">Autres</h1>
                    <div className="flex gap-5">
                        {OTHER.map(other => (
                            <div key={other.id} className="flex flex-col justify-center items-center">
                                <Image
                                    src={other.path}
                                    alt={other.alt}
                                    width={60}
                                    height={60}
                                    className={"h-[60px]"}
                                />
                                <span className="font-medium mt-2">{other.alt}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </div>
    )
}