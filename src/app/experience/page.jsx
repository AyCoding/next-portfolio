import Link from "next/link";
import {ExternalLink} from "lucide-react";

export default function Experience() {
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl font-black py-6">My experiences</h1>

            <div className="border-t border-slate-700 my-2 mb-10">
                <div className="flex mt-2 mb-2 ">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold w-full uppercase">
                            Institut de Médecine du Sport de Troyes
                        </h2>
                        <p className="font-medium">Internship/France</p>
                    </div>

                    <div className="text-end">
                        <p>05/06/2023 - 06/07/2023</p>
                        <p className="font-bold">Remote</p>
                    </div>
                </div>


                <div className="flex">
                    <p className="font-light">Pendant mon stage d&apos;un mois lors de ma première année en BTS SIO SLAM, j&apos;ai eu l&apos;opportunité de contribuer à la conception et à la refonte du site web de l&apos;Institut de Médecine du Sport de Troyes.</p>
                    {/*<Link href={"https://canaud-emilie-sage-femme.fr/"}*/}
                    {/*      target="_blank" rel="noreferrer"*/}
                    {/*      className="flex gap-1 items-center font-medium hover:text-gray-700 transition-all">*/}
                    {/*    <ExternalLink/>*/}
                    {/*    Website*/}
                    {/*</Link>*/}
                </div>
            </div>

            <div className="border-t border-slate-700 my-2 mb-10">
                <div className="flex mt-2 mb-2 ">
                    <div className="flex-1">
                        <h2 className="text-xl font-bold w-full uppercase">
                            Webmaster Sage-femme
                        </h2>
                        <p className="font-medium">Home/France</p>
                    </div>

                    <div className="text-end">
                        <p>July 2022 - Present</p>
                        <p className="font-bold">Remote</p>
                    </div>
                </div>


                <div className="flex">
                    <p className="font-light flex-1">Création du site/design pour une sage-femme basé sur Troyes.</p>
                    <Link href={"https://canaud-emilie-sage-femme.fr/"}
                          target="_blank" rel="noreferrer"
                          className="flex gap-1 items-center font-medium hover:text-gray-700 transition-all">
                        <ExternalLink/>
                        Website
                    </Link>
                </div>
            </div>

        </div>
    )
}