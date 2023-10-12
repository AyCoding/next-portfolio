import Image from "next/image";
import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {PROJECTS, Project} from "@/data/data";

interface Params {
    slug: string;
}

export async function generateMetadata({params}: { params: Params}) {
    const project: Project | undefined = PROJECTS.find(project => project.slug === params.slug)
    return {
        title: `Aymeric DE LANGE - ${project?.name}`,
        description: `${project?.desc}`,
    }
}

export default function ProjectSlug({params}: { params: Params}) {
    const project = PROJECTS.find(project => project.slug === params.slug)

    return (
        <div className="container mx-auto pb-[40px] px-5 md:px-2">
            {/*{params.slug}*/}
            <h1 className="text-5xl font-black py-6">
                {project?.name}
            </h1>
            {project?.url && (
                <Link href={`${project.url}`}
                      className="flex gap-1 items-center font-medium text-xl hover:text-gray-700 my-2 hover:translate-x-1 transition-all">
                    <ExternalLink/>
                    Visiter le site web
                </Link>
            )}
            <div>
                {project?.img.map(images => (
                    <Image src={`/${images.img}`} alt="" key={images.id} width={2000} height={2000}
                           className="mb-5 border-t border-slate-700 w-full"/>
                ))}
            </div>
        </div>
    )
}