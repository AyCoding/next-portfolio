import Image from "next/image";

export const metadata = {
    title: 'Aymeric DE LANGE - Stats',
    description: 'Découvrez mes statistiques de codage',
}

export default function Stats() {
    return (
        <div className="container mx-auto pb-[40px] px-5 md:px-2">
            <h1 className="text-5xl font-black py-6">Mes Statistiques</h1>
            <div>
                <h4 className="text-xl mb-1 font-bold">Mon temps de code depuis :</h4>
                <p className="mb-1">12 janvier 2023 à aujourd&apos;hui</p>
                <a href="https://wakatime.com/@662ada7c-bebb-4a06-abd1-429f3ee1335c">
                    <Image
                        src="https://wakatime.com/badge/user/662ada7c-bebb-4a06-abd1-429f3ee1335c.svg"
                        alt="Total time coded since Jan 12 2023"
                        width={1000}
                        height={20}
                        className="w-max"
                    />
                </a>
            </div>

            <div>

                <iframe src="https://github-readme-stats.vercel.app/api/wakatime?username=AyCoding&layout=compact"
                        className="w-full h-[80vh]"></iframe>
            </div>
        </div>
    )
}