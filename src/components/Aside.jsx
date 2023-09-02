"use client"
import ButtonLink from "@/components/ButtonLink";
import {useState} from "react";
import {AlignJustify} from "lucide-react";

export default function Aside() {
    const Links = [
        {id: 0, name: "Accueil", slug: ""},
        {id: 1, name: "About", slug: "about"},
        {id: 2, name: "Projets", slug: "project"},
        {id: 3, name: "Skills", slug: "skills"},
        {id: 4, name: "Stats", slug: "stats"},
        {id: 5, name: "Experience", slug: "experience"},
        {id: 6, name: "Contact", slug: "contact"},
    ]

    const [nav, setNav] = useState(false)

    const handleClick = (e) => {
        if (nav) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    return (
        <div className="flex flex-col md:flex-row text-orange-500 justify-center items-center bg-stone-800 p-1 rounded-xl fixed bottom-4 mx-auto w-max left-1/2 translate-x-[-50%]">

            {nav && (
                <div className="md:hidden">
                    {Links.map(linkItem => (
                        <ButtonLink name={linkItem.name} slug={linkItem.slug} key={linkItem.id}/>
                    ))}
                </div>
            )}

            <div className="hidden md:flex">
                {Links.map(linkItem => (
                    <ButtonLink name={linkItem.name} slug={linkItem.slug} key={linkItem.id}/>
                ))}
            </div>

            <div className="w-[40px] h-[40px] rounded-xl cursor-pointer text-white flex items-center justify-center md:hidden "
                 onClick={handleClick}>
                <AlignJustify  className="w-[40px] h-[40px]"/>
            </div>
        </div>
    )
}