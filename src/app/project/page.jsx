import Image from "next/image";
import Link from 'next/link'
import {PROJECTS} from "@/data/data";

export const metadata = {
    title: 'Aymeric DE LANGE - Project',
    description: 'Discover my projects',
}

export default function Project() {
    const reversedProjects = [...PROJECTS].reverse();
    return (
        <>
            <div className="flex flex-col gap-10 container mx-auto pb-[50px] px-5 md:px-2">
                <h1 className="text-5xl font-black py-6">
                    Discover my projects
                </h1>

                {reversedProjects.map(project => (
                    <div className="flex flex-col border-t border-slate-700 my-2 lg:flex-row overflow-hidden"
                         key={project.id}>
                        <div className="lg:max-h-80">
                            {/*<img src={`./${project.img}`} alt=""*/}
                            {/*     className="max-w-full lg:max-h-fit lg:max-w-2xl h-fit object-cover"/>*/}
                            {/*<Image src={`./${project.img}`} alt={project.img} className="max-w-full lg:max-h-fit lg:max-w-2xl h-fit object-cover"/>*/}
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