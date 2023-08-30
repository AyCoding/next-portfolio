import Image from "next/image";

export const metadata = {
    title: 'Aymeric DE LANGE - Project',
    description: 'Discover my projects',
}

export default function ProjectSlug({ params }) {
    const PROJECTS = [
        {
            id: 1,
            name: "Webmaster Sage-femme",
            slug: "emilie-canaud-sage-femme",
            img: [
                {id: 1, img: "canaud-emilie-sage-femme.fr_.png"}
            ],
            desc: "Création du site/design pour une sage-femme basé sur Troyes."
        },
        {
            id: 2,
            name: "Institut de Médecine du Sport",
            slug: "institut-de-medecine-du-sport",
            img: [
                {id: 1, img: "accueil-ims.png"},
                {id: 2, img: "institut-ims.png"}
            ],
            desc: "Pendant mon stage d'un mois lors de ma première année en BTS SIO SLAM, j'ai eu l'opportunité de contribuer à la conception et à la refonte du site web de l'Institut de Médecine du Sport de Troyes."
        }
    ]

    const project = PROJECTS.find(project => project.slug === params.slug)

    return (
        <div className="container mx-auto pb-[40px] px-2">
            {/*{params.slug}*/}
            <h1 className="text-5xl font-black py-6">
                {project.name}
            </h1>
            <div>
                {project.img.map(images => (
                    <Image src={`/${images.img}`} alt="" key={images.id} width={2000} height={2000}
                         className="mb-5 border-t border-slate-700 w-full"/>
                ))}
            </div>
        </div>
    )
}