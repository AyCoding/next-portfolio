interface Image {
    id: number;
    img: string;
}

interface Language {
    id: number;
    lang: string;
}

interface skills {
    id: number;
    url: string;
    name: string;
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
    skills?: skills[];

}

export type {
    Image,
    Project,
    Language
}

export const PROJECTS: Project[] = [
    /*{
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
    },*/
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
        cover: "Projects/imstroyes/imstroyes.png",
        alt: "Image de du site web de l'institut" ,
        img: [
            {id: 1, img: "Projects/imstroyes/imstroyes.png"},
            {id: 2, img: "Projects/imstroyes/institut.png"},
            {id: 3, img: "Projects/imstroyes/equipe.png"},
            {id: 4, img: "Projects/imstroyes/sante.png"},
            {id: 5, img: "Projects/imstroyes/sport-sante.png"},
            {id: 6, img: "Projects/imstroyes/teamims.png"},
            {id: 7, img: "Projects/imstroyes/contact.png"},
        ],
        desc: "Pendant mon stage d'un mois lors de ma première année en BTS SIO SLAM, j'ai eu l'opportunité de contribuer à la conception et à la refonte du site web de l'Institut de Médecine du Sport de Troyes.",
        languages: [
            {id: 1, lang: "Nuxt.js"},
        ],
        skills: [
            {id: 1, url: "/files/btssio.org/Stage SIO1 - Institut de Médecine du Sport de Troyes.pdf", name: "Stage SIO1"},
            {id: 1, url: "/files/btssio.org/Stage SIO2 - Institut de Médecine du Sport de Troyes.pdf", name: "Stage SIO2"}
        ]
    },
    {
        id: 4,
        name: "Projet roulette (Lycée)",
        slug: "projet-roulette",
        url: "",
        cover: "Projects/roulette/roulette-draw.png",
        alt: "Projet roulette",
        img: [
            // {id: 1, img: "Projects/roulette/roulette.png"},
            {id: 2, img: "Projects/roulette/roulette-draw.png"},
        ],
        desc: "Projet de rentré de deuxième année de BTS SIO SLAM, pour revoir les compétences acquises l'année dernière.\n" +
            "                            Roulette est une application web qui permet, à partir d'une liste d'étudiants (une classe), de tirer au sort un étudiant. Une fois l'étudiant sélectionné nous pouvons lui affecter une note puis il sort de la liste. L'opération est renouvelée jusqu'à épuisement de la liste.\n",
        languages: [
            {id: 1, lang: "PHP"},
            {id: 2, lang: "MVC"},
            {id: 2, lang: "POO"},
            {id: 4, lang: "MySQL"},
        ],
        skills: [
            {id: 1, url: "/files/btssio.org/Roulette PHP.pdf", name: "Fiche des compétences"}
        ]
    },
    {
        id: 5,
        name: "Projet Compétences (Lycée)",
        slug: "projet-competences",
        url: "",
        cover: "Projects/PC/PC-login.png",
        alt: "Image de du site web de l'institut" ,
        img: [
            {id: 1, img: "Projects/PC/PC-login.png"},
            {id: 2, img: "Projects/PC/PC-accueil-rh.png"},
            {id: 3, img: "Projects/PC/PC-employee.png"},
            {id: 4, img: "Projects/PC/PC-accueil-collabo.png"}
        ],
        desc: "En équipe pendant une projet de cours de BTS, j'ai contribué au projet 2024 de S11. Mon rôle consistait à développer une solution de gestion des compétences, en assurant une identification sécurisée, en mettant en place des fonctionnalités clés, et en optimisant l'interface utilisateur. Ce projet reflète ma capacité à travailler efficacement en équipe tout en relevant des défis techniques.",
        languages: [
            {id: 1, lang: "ReactJS"},
            {id: 1, lang: "Supabase"},
        ],
        skills: [
            {id: 1, url: "/files/btssio.org/Projet compétences.pdf", name: "Fiche des compétences"}
        ]
    }
]

