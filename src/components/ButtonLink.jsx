"use client"

import Link from "next/link";
// import {useRouter} from "next/router";

// TODO : Verifier les params dans le lien pour modifier le CSS (True : BG WHITE ? BG BLACK & TEXT-WHITE)

export default function ButtonLink({name, slug}) {

    // const router = useRouter();

    // Vérifiez si l'URL correspond au slug de ce bouton
    // const isActive = router.pathname === `/${slug}`;
    const isActive = false
    if (isActive) {
        return (
            <Link href={`/${slug}`} className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-white text-stone-800 rounded-full text-xs">
                {/*<Home className="w-[40px] h-[40px]"/>*/}
                <span className="text-center">{name}</span>
            </Link>
        )
    } else {
        return (
            <Link href={`/${slug}`} className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-stone-800 text-white rounded-full text-xs">
                <span className="text-center">{name}</span>
            </Link>
        )
    }
}