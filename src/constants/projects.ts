export type Project = {
    name: string;
    icon?: string;
    image: string;
    description: { fr: string[]; en: string[] };
    url: string;
    tags: string[];
};

export const projects: Project[] = [
    {
        name: "Statify",
        image: "/images/projects/statify.png",
        icon: "/images/projects/statify-icon.png",
        description: {
            fr: [
                "Statify est une application web qui affiche les statistiques des utilisateurs de Spotify.",
                "Elle utilise l'API de Spotify pour récupérer les données concernant les artistes, musiques et playlists pour les afficher de manière visuelle.",
            ],
            en: [
                "Statify is a web application that displays Spotify user statistics.",
                "It uses the Spotify API to retrieve data about artists, songs, and playlists to present them visually.",
            ],
        },
        url: "https://github.com/MatteoBernard/Statify",
        tags: ["TypeScript", "React", "Tailwind CSS", "Spotify API", "Redux"],
    },
    {
        name: "PawkeDex",
        image: "/images/projects/pawkedex.jpg",
        icon: "/images/projects/pawkedex-icon.png",
        description: {
            fr: [
                "PawkeDex est une application mobile qui permet aux utilisateurs de consulter des informations sur les Pokémon.",
                "Elle utilise la PokéAPI pour récupérer les données des Pokémon et des régions, et les présenter de manière visuelle.",
            ],
            en: [
                "PawkeDex is a mobile application that allows users to view information about Pokémon.",
                "It uses the PokeAPI to retrieve data about Pokémon and regions, presenting it visually.",
            ],
        },
        url: "https://github.com/MatteoBernard/PawkeDex",
        tags: ["TypeScript", "React Native", "Expo", "Redux", "PokeAPI", "Microsoft Designer"]
    },
    {
        name: "FlappyCapy",
        image: "/images/projects/flappy-capy.jpg",
        icon: "/images/projects/flappy-capy-icon.png",
        description: {
            fr: [
                "FlappyCapy est un jeu inspiré de Flappy Bird, mais avec un personnage de capybara qui vole dans l'espace.",
                "Le personnage est contrôlé par l'utilisateur pour éviter les obstacles, le but est de faire le meilleur score possible.",
            ],
            en: [
                "FlappyCapy is a game inspired by Flappy Bird, featuring a capybara character flying in space.",
                "The character is controlled by the user to avoid obstacles, with the goal of achieving the highest score possible.",
            ],
        },
        url: "https://github.com/MatteoBernard/FlappyCapy",
        tags: ["Python", "Pygame"]
    },
    {
        name: "AC-World",
        image: "/images/projects/ac-world.png",
        icon: "/images/projects/ac-world-icon.png",
        description: {
            fr: [
                "AC-World est une application mobile sur le thème d'Animal Crossing.",
                "Elle permet aux utilisateurs de voir tous les habitants du jeu, ainsi que leurs informations. Ils peuvent également les mettre en favoris, jouer à un jeu de quiz et au jeu memo."
            ],
            en: [
                "AC-World is a mobile application themed around Animal Crossing.",
                "It allows users to view all the villagers from the game, along with their information. Users can also favorite villagers, play a quiz game, and a memory game.",
            ],
        },
        url: "https://github.com/MatteoBernard/AC-World",
        tags: ["TypeScript", "React Native", "Expo", "SQLite"]
    },
    {
        name: "Portfolio",
        image: "/images/projects/portfolio.png",
        description: {
            fr: [
                "Mon portfolio personnel, où je présente mes projets et mes compétences.",
            ],
            en: [
                "My personal portfolio, where I showcase my projects and skills.",
            ],
        },
        url: "https://github.com/MatteoBernard/portfolio_25",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "React", "EmailJS", "next-intl"]
    },
    {
        name: "Skylanders API",
        image: "/images/projects/skylanders-api.PNG",
        icon: "/images/projects/skylanders-api-icon.png",
        description: {
            fr: [
                "Skylanders API est une API REST qui fournit des informations sur les personnages, figurines et jeux de la franchise Skylanders.",
                "Elle permet aux utilisateurs de récupérer ces données via différents endpoints.",
            ],
            en: [
                "Skylanders API is a REST API that provides information about characters, figures, and games from the Skylanders franchise.",
                "It allows users to retrieve this data through various endpoints.",
            ],
        },
        url: "https://github.com/MatteoBernard/SkylandersApi",
        tags: ["JavaScript", "Express", "Swagger", "pug"]
    },
    {
        name: "Skylanders Wiki",
        image: "/images/projects/skylanders-wiki.jpg",
        icon: "/images/projects/skylanders-wiki-icon.png",
        description: {
            fr: [
                "Skylanders Wiki est une application mobile qui fournit des informations sur les personnages, figurines et jeux de la franchise Skylanders.",
                "Elle utilise l'API Skylanders pour récupérer les données et les afficher de manière visuelle.",
            ],
            en: [
                "Skylanders Wiki is a mobile application that provides information about characters, figures, and games from the Skylanders franchise.",
                "It uses the Skylanders API to retrieve data and present it visually.",
            ],
        },
        url: "https://github.com/MatteoBernard/SkylandersWiki",
        tags: ["TypeScript", "React Native", "Expo"]
    },
];