import {PROJECTS} from "@/data/data";

export default function sitemap() {
    return [
        {
            url: 'https://aymericdelange.fr/',
        },
        {
            url: 'https://aymericdelange.fr/about',
        },
        {
            url: 'https://aymericdelange.fr/project',
        },
        ...PROJECTS.map(project => ({
            url: `https://aymericdelange.fr/project/${project.slug}`,
        })),
        {
            url: 'https://aymericdelange.fr/skills',
        },
        {
            url: 'https://aymericdelange.fr/stats',
        },
        {
            url: 'https://aymericdelange.fr/experience',
        },
        {
            url: 'https://aymericdelange.fr/contact',
        },
    ]
}