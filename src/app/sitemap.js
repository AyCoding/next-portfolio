import {PROJECTS} from "@/data/data";

export default function sitemap() {
    return [
        {
            url: 'https://aymericdelange.fr/',
            lastModified: new Date(),
        },
        {
            url: 'https://aymericdelange.fr/about',
            lastModified: new Date(),
        },
        {
            url: 'https://aymericdelange.fr/project',
            lastModified: new Date(),
        },
        ...PROJECTS.map(project => ({
            url: `https://aymericdelange.fr/project/${project.slug}`,
            lastModified: new Date(),
        })),
        {
            url: 'https://aymericdelange.fr/skills',
            lastModified: new Date(),
        },
        {
            url: 'https://aymericdelange.fr/stats',
            lastModified: new Date(),
        },
        {
            url: 'https://aymericdelange.fr/experience',
            lastModified: new Date(),
        },
        {
            url: 'https://aymericdelange.fr/contact',
            lastModified: new Date(),
        },
    ]
}