import Image from "next/image";
import Link from 'next/link'

export default function Project() {

    const PROJECTS = [
        {
            id: 1,
            name: "Webmaster Sage-femme",
            slug: "emilie-canaud-sage-femme",
            img: "canaud-emilie-sage-femme.fr_.png",
            alt: "Accueil de du site",
            desc: "Création du site/design pour une sage-femme basé sur Troyes."
        },
        {
            id: 2,
            name: "Institut de Médecine du Sport",
            slug: "institut-de-medecine-du-sport",
            img: "accueil-ims.png",
            alt: "Accueil de du site",
            desc: "Pendant mon stage d'un mois lors de ma première année en BTS SIO SLAM, j'ai eu l'opportunité de contribuer à la conception et à la refonte du site web de l'Institut de Médecine du Sport de Troyes."
        }
    ]
    return (
        <>
            <div className="flex flex-col gap-10 container mx-auto pb-[40px]">
                <h1 className="text-5xl font-black py-6">
                    Discover my projects
                </h1>

                {PROJECTS.reverse().map(project => (
                    <div className="flex flex-col border-t border-slate-700 my-2 lg:flex-row overflow-hidden"
                         key={project.id}>
                        <div className="lg:max-h-80">
                            {/*<img src={`./${project.img}`} alt=""*/}
                            {/*     className="max-w-full lg:max-h-fit lg:max-w-2xl h-fit object-cover"/>*/}
                            {/*<Image src={`./${project.img}`} alt={project.img} className="max-w-full lg:max-h-fit lg:max-w-2xl h-fit object-cover"/>*/}
                            <Image
                                src={`/${project.img}`}
                                alt={project.alt}
                                className="max-w-full lg:max-h-fit lg:max-w-2xl h-fit object-cover"
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>


                        <div className="p-2">
                            <h1 className="text-5xl font-medium mb-2 w-full">
                                {project.name}
                            </h1>
                            <p className="max-w-5xl">
                                {project.desc}
                            </p>
                            <Link href={`/project/${project.slug}`}
                                  className="inline-block w-fit py-2 px-4 mt-5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 hover:transition">
                                See project
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}