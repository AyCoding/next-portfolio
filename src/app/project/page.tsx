import Image from "next/image";
import Link from 'next/link'
import {PROJECTS} from "@/data/data";


export const metadata = {
    title: 'Aymeric DE LANGE - Projets',
    description: 'Découvrez mes projets',
}

export default function Project() {
    const reversedProjects = [...PROJECTS].reverse();
    return (
        <>
            <div className="flex flex-col gap-10 container mx-auto pb-[50px] px-5 md:px-2">
                <h1 className="text-5xl font-black py-6">
                    Découvrez mes projets
                </h1>

                {reversedProjects.map(project => (
                    <div className="flex flex-col border-t border-slate-700 my-2 lg:flex-row overflow-hidden"
                         key={project.id}>
                        <div className="lg:max-h-80">
                            <Image
                                src={`/${project.cover}`}
                                alt={project.alt}
                                className="max-w-full max-h-[320px] lg:max-h-fit lg:max-w-2xl object-cover object-top"
                                width={1440}
                                height={900}
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

                            <div className="flex gap-2 pt-2 flex-wrap text-sm font-normal">
                                {project.languages && project.languages.map(language => (
                                    <div key={language.id} className="border border-stone-700 gap-2 rounded-full px-4 py-0.5">
                                        {language.lang}
                                    </div>
                                ))}
                            </div>

                            <Link href={`/project/${project.slug}`}
                                  className="inline-block w-fit py-2 px-4 mt-5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 hover:transition">
                                Voir le projet
                            </Link>
                        </div>
                    </div>
                ))}

                <h1 className="text-5xl font-black pt-6">Épreuve E4 : Portefeuille de compétences </h1>
                <Link href="/Tableau E4 de  22DELANGE.pdf" className="text-2xl font-medium mb-2 w-full">Voir le tableau</Link>

                {/*<h1 className="text-5xl font-black pt-6">Projets scolaire</h1>
                <div className="flex flex-col gap-6 mb-6">
                    <div>
                        <h1 className="text-2xl font-medium mb-2 w-full">
                            Projet Sélection, première année
                        </h1>
                        <h2 className="text-xl text-slate-400 pb-4">PHP MySQL HTML SCSS</h2>
                        <p>
                            Chaque fin d&apos;année l’équipe pédagogique procède à une sélection des candidats pour intégrer le BTS SIO.
                            Actuellement, cette sélection est réalisée à partir d’une grille d’évaluation sur papier pour chaque dossier.
                            Une fois toutes les grilles remplies, un classement par point est effectué.
                            Puis, il faut de nouveau manuellement rendre les résultats dans un tableau numérique.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium mb-2 w-full">
                            ScoreResto, première année
                        </h1>
                        <h2 className="text-xl text-slate-400 pb-4">PHP MySQL HTML</h2>
                        <p>ScoreResto est une application permettant l&apos;apprentissage de l&apos;architecture Modèle-Vue-Contrôleur en PHP.</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium mb-2 w-full">
                            DolibarrApp, première année
                        </h1>
                        <h2 className="text-xl text-slate-400 pb-4">JavaScript HTML</h2>
                        <p>
                            Création d&apos;un application mobile à l&apos;aide de JavaScript et Apache Cordova afin d&apos;utiliser les requêtes api sur le ERP/CRM Dolibarr pour la gestion des remboursements.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-medium mb-2 w-full">
                            Roulette, deuxième année
                        </h1>
                        <h2 className="text-xl text-slate-400 pb-4">PHP MVC POO MySQL / Svelte</h2>
                        <p>
                            Projet de rentré de deuxième année de BTS SIO SLAM, pour revoir les compétences acquises l&apos;année dernière.
                            Roulette est une application web qui permet, à partir d&apos;une liste d&apos;étudiants (une classe), de tirer au sort un étudiant. Une fois l&apos;étudiant sélectionné nous pouvons lui affecter une note puis il sort de la liste. L&apos;opération est renouvelée jusqu&apos;à épuisement de la liste.
                        </p>
                    </div>
                </div>*/}
            </div>
        </>
    )
}