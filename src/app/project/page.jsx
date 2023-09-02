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
            </div>
        </>
    )
}