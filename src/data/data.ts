interface Image {
    id: number;
    img: string;
}

interface Language {
    id: number;
    lang: string;
}

interface Project {
    id: number;
    name: string;
    slug: string;
    url: string;
    cover: string;
    alt: string;
    img: Image[];
    desc: string;
    languages: Language[];
}

export type {
    Image,
    Project,
    Language
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        name: "Webmaster Sage-femme",
        slug: "emilie-canaud-sage-femme",
        url: "https://canaud-emilie-sage-femme.fr",
        cover: "canaud-emilie-sage-femme.fr_.png",
        alt: "Image de du site web de Emilie Canaud",
        img: [
            {id: 1, img: "canaud-emilie-sage-femme.fr_.png"}
        ],
        desc: "Création du site/design pour une sage-femme basé sur Troyes.",
        languages: [
            {id: 1, lang: "PHP"},
        ]
    },
    {
        id: 2,
        name: "Projet sélection (Lycée)",
        slug: "projet-selection",
        url: "https://github.com/AyCoding/Projet-Selection",
        cover: "Projects/Project-Selection/eval.png",
        alt: "Image du projet selection",
        img: [
            {id: 1, img: "Projects/Project-Selection/login.png"},
            {id: 2, img: "Projects/Project-Selection/eval.png"},
            {id: 3, img: "Projects/Project-Selection/eval-grilles.png"},
            {id: 4, img: "Projects/Project-Selection/secretaire.png"},
            {id: 5, img: "Projects/Project-Selection/admin.png"},
        ],
        desc: "Chaque fin d'année l’équipe pédagogique procède à une sélection des candidats pour intégrer le BTS SIO. Actuellement, cette sélection est réalisée à partir d’une grille d’évaluation sur papier pour chaque dossier. Une fois toutes les grilles remplies, un classement par point est effectué. Puis, il faut de nouveau manuellement rendre les résultats dans un tableau numérique.",
        languages: [
            {id: 1, lang: "PHP"},
            {id: 2, lang: "MySQL"},
        ]
    },
    {
        id: 3,
        name: "Institut de Médecine du Sport",
        slug: "institut-de-medecine-du-sport",
        url: "https://imstroyes.fr/",
        cover: "accueil-ims.png",
        alt: "Image de du site web de l'institut" ,
        img: [
            {id: 1, img: "accueil-ims.png"},
            {id: 2, img: "institut-ims.png"}
        ],
        desc: "Pendant mon stage d'un mois lors de ma première année en BTS SIO SLAM, j'ai eu l'opportunité de contribuer à la conception et à la refonte du site web de l'Institut de Médecine du Sport de Troyes.",
        languages: [
            {id: 1, lang: "VueJS"},
        ]
    }
]

