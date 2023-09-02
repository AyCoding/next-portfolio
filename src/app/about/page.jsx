export const metadata = {
    title: 'Aymeric DE LANGE - A propos de moi',
    description: 'Bonjour, je suis Aymeric, développeur front-end passionné par la programmation web depuis 2018. Au fil des années, j\'ai acquis une solide expérience en développement web front-end, ce qui m\'a permis de créer divers projets intéressants. Je vous invite à découvrir mes projets ci-dessous. N\'hésitez pas à me contacter si vous avez des questions ou si vous êtes intéressé par une collaboration.',
}

export default function About() {
    return (
        <div className="container mx-auto pb-[40px] px-5 md:px-2 sm:flex sm:flex-col sm:justify-center sm:h-screen">
            <p className="text-5xl font-black py-6">Découvrez-moi</p>

            <section className="w-full h-52 py-5 md:rounded-3xl">
                <p className="text-xl text-gray-700">
                    Bonjour, je suis Aymeric, développeur front-end passionné par la programmation web depuis 2018. Au
                    fil des années, j&apos;ai acquis une solide expérience en développement web front-end, ce qui m&apos;a permis
                    de créer divers projets intéressants. Je vous invite à découvrir mes projets ci-dessous. N&apos;hésitez
                    pas à me contacter si vous avez des questions ou si vous êtes intéressé par une collaboration.
                </p>
            </section>
        </div>
    )
}