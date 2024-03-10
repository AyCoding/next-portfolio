import Link from "next/link";
import {ExternalLink} from "lucide-react";

export const metadata = {
    title: 'Aymeric DE LANGE - Expérience',
    description: 'Découvrir mon expérience du travail et mes études',
}

export default function Experience() {
    const EXPERIENCES = [
        {
            id: 3,
            name: "Institut de Médecine du Sport de Troyes",
            type: "Stage",
            date: "08/01/2024 - 09/02/2024",
            location: "A distance",
            desc: "Finalisation du site principale, ajout des actualités, d'une galerie photos. Gestion des données avec un CMS (Système de gestion de contenu) avec Strapi. Développement d'une application web en Vue.js pour la gestion des rendez-vous.",
            url: "https://imstroyes.fr/",
            languages: [
                {id: 1, lang: "NuxtJS"},
                {id: 2, lang: "VueJS"}
            ]
        },
        {
            id: 2,
            name: "Institut de Médecine du Sport de Troyes",
            type: "Stage",
            date: "05/06/2023 - 06/07/2023",
            location: "A distance",
            desc: "Pendant mon stage d'un mois lors de ma première année en BTS SIO SLAM, j'ai eu l'opportunité de contribuer à la conception et à la refonte du site web de l'Institut de Médecine du Sport de Troyes.",
            url: "https://imstroyes.fr/",
            languages: [
                {id: 1, lang: "NuxtJS"}
            ]
        },
        /*{
            id: 1,
            name: "Webmaster Sage-femme",
            type: "Maison",
            date: "07/2022 - 09/2022",
            location: "A distance",
            desc: "Création du site/design pour une sage-femme basé sur Troyes.",
            url: "https://canaud-emilie-sage-femme.fr/",
            languages: [
                {id: 1, lang: "PHP"}
            ]
        }*/
    ]

    const SCHOOLS = [
        {id:1, name: "LP Jean-Baptiste Clément, Vivier-au-Court", date: "2019/2022", desc: "Bac pro SN - systèmes numériques, option réseaux informatiques et systèmes communicants (RISC)"},
        {id:2, name: "Lycée Gaspard Monge, Charleville-Mézières", date: "2022/2024", desc: "BTS Services informatiques aux organisations option B solutions logicielles et applications métiers (SIO SLAM)"},
        {id:3, name: "EiSINe, Charleville-Mézières", date: "Poursuite d'étude", desc: "Licence Pro Métiers du numérique : conception, rédaction et réalisation web – parcours Intégration et Webdesign"}
    ]
    return (
        <div className="container max-w-[1200px] mx-auto pb-[40px] px-5 md:px-2">
            <h1 className="text-5xl font-black py-6">Mes expériences</h1>

            {EXPERIENCES.map(experience => (
                <div className="border-t border-slate-700 my-10" key={experience.id}>
                    <div className="flex flex-col md:flex-row my-5">
                        <div className="md:flex-1">
                            <h2 className="text-xl font-bold w-full uppercase">
                                {experience.name}
                            </h2>
                            <p className="font-medium">{experience.type}</p>
                        </div>

                        <div className="md:text-end">
                            <p>{experience.date}</p>
                            <p className="font-bold">{experience.location}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="font-light flex-1 md:mr-5">
                            <p className="font-normal">{experience.desc}</p>

                            <div className="flex justify-between gap-2 py-5 md:py-2 flex-wrap text-sm font-normal">
                                <div className="flex gap-2 py-5 md:py-2 flex-wrap text-sm font-normal">
                                    {experience.languages && experience.languages.map(language => (
                                        <div key={language.id}
                                             className="border border-stone-700 gap-2 rounded-full px-4 py-0.5">
                                            {language.lang}
                                        </div>
                                    ))}
                                </div>
                                {experience.url && (
                                    <Link href={experience.url}
                                          target="_blank" rel="noreferrer"
                                          className="flex gap-1 items-center font-medium hover:text-gray-700 transition-all">
                                        <ExternalLink/>
                                        Site web
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="pt-10 pb-10 flex flex-col gap-4">
                <h1 className="text-5xl font-black py-6">Mes études</h1>
                {SCHOOLS.reverse().map(school => (
                    <div key={school.id}>
                        <div className="flex justify-between flex-wrap">
                            <h2 className="uppercase text-xl font-bold">{school.name}</h2>
                            <p className="text-xl">{school.date}</p>
                        </div>
                        <p className="text-sm">{school.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}