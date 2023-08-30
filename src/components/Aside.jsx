import ButtonLink from "@/components/ButtonLink.jsx";

export default function Aside() {
    const Links = [
        {id: 0, name: "Home", slug: ""},
        {id: 1, name: "About", slug: "discover"},
        {id: 2, name: "Projects", slug: "project"},
        {id: 3, name: "Skills", slug: "skills"},
        {id: 4, name: "Stats", slug: "stats"},
        {id: 5, name: "Experience", slug: "experience"}
    ]

    return (
        <div
            className="flex text-orange-500 justify-center items-center bg-stone-800 p-1 rounded-3xl fixed bottom-4 mx-auto w-max left-1/2 translate-x-[-50%]">
            {Links.map(linkItem => (
                <ButtonLink name={linkItem.name} slug={linkItem.slug} key={linkItem.id}/>
            ))}
        </div>
    )
}