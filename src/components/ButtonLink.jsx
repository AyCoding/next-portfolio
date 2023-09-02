"use client"
import Link from "next/link";

export default function ButtonLink({name, slug}) {
    return (
        <Link href={`/${slug}`}
              className="flex flex-col items-center transition-all py-[0.5rem] px-[1rem] uppercase font-black bg-stone-800 text-white hover:bg-white hover:text-stone-800 rounded-xl text-xs">
            <span className="text-center">{name}</span>
        </Link>
    )
}