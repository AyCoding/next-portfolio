import Image from "next/image";
import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {PROJECTS, Project} from "@/data/data";

interface Params {
    slug: string;
}

export async function generateMetadata({params}: { params: Params }) {
    const project: Project | undefined = PROJECTS.find(project => project.slug === params.slug)
    return {
        title: `Aymeric DE LANGE - ${project?.name}`,
        description: `${project?.desc}`,
    }
}

export default function ProjectSlug({params}: { params: Params }) {
    const project = PROJECTS.find(project => project.slug === params.slug)

    return (
        <div className="container mx-auto pb-[40px] px-5 md:px-2">
            {/*{params.slug}*/}
            <h1 className="text-5xl font-black py-6">
                {project?.name}
            </h1>
            {project?.url && (
                <Link href={`${project.url}`}
                      className="flex gap-1 items-center font-medium text-xl hover:text-gray-700 my-2 hover:translate-x-1 transition-all"
                      target="_blank" rel="noreferrer">
                    <ExternalLink/>
                    Visiter le site web
                </Link>
            )}

            <div>
                <div className="py-6">
                    <p className="max-w-5xl text-lg leading-normal">{project?.desc}</p>
                    <div className="flex gap-2 pt-2 flex-wrap text-sm font-normal max-w-5xl mb-5">
                        {project?.languages && project.languages.map(language => (
                            <div key={language.id} className="border border-stone-700 rounded-full gap-2 px-4 py-0.5">
                                {language.lang}
                            </div>
                        ))}
                    </div>
                </div>

                {project?.skills && (
                    <div>
                        <div className="pb-10">
                            <h4 className="text-2xl">Principale compétences</h4>
                            <div className="flex flex-wrap gap-5">
                                {project.skills.map(skill => (
                                    <Link href={`${skill.url}`} key={skill.id}
                                          target="_blank" rel="noreferrer"
                                    >
                                        {skill.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {project?.img.map(images => (
                    <Image src={`/${images.img}`} alt="" key={images.id} width={1440} height={900}
                           className="mb-5 border-t border-slate-700 w-full shadow-lg"/>
                ))}
            </div>
        </div>
    )
}