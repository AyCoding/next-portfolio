"use client"
import Link from "next/link";
// import {useParams, useRouter} from "next/navigation";
// import { usePathname } from 'next/navigation'

// TODO : Verifier les params dans le lien pour modifier le CSS (True : BG WHITE ? BG BLACK & TEXT-WHITE)

export default function ButtonLink({name, slug}) {
    // const router = useRouter();
    // const pathname = usePathname()
    // const isActive = slug === usePathname();

    const isActive = false
    if (isActive) {
        return (
            <Link href={`/${slug}`} className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-white text-stone-800 rounded-xl text-xs">
                {/*<Home className="w-[40px] h-[40px]"/>*/}
                <span className="text-center">{name}</span>
            </Link>
        )
    } else {
        return (
            <Link href={`/${slug}`} className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-stone-800 text-white hover:bg-white hover:text-stone-800 rounded-xl text-xs">
                <span className="text-center">{name}</span>
            </Link>
        )
    }
}