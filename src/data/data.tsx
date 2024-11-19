export const SKILLS = [
    {
        name: 'Frontend',
        image: "/images/frontend.png",
        skills: [
            { id: 1, name: 'PHP', image: '/images/php.png' },
            { id: 2, name: 'Drupal', image: '/images/drupal.png' },
            { id: 3, name: 'Laravel', image: '/images/laravel.png' },
            { id: 4, name: 'Python', image: '/images/python.png' },
        ]
    },
    {
        name: 'Backend',
        image: "/images/backend.png",
        skills: [
            { id: 5, name: 'Javascript', image: '/images/js.png' },
            { id: 6, name: 'React', image: '/images/React.webp' },
            { id: 7, name: 'HTML5', image: '/images/html.png' },
            { id: 8, name: 'CSS3', image: '/images/css.png' },
            { id: 9, name: 'Tailwind', image: '/images/tailwind.png' },
            { id: 10, name: 'Bootstrap', image: '/images/bootstrap.png' },
        ]
    },
    {
        name: 'Tools',
        skills: [
            { id: 11, name: 'GIT', image: '/images/git.png' },
            { id: 12, name: 'GITHUB', image: '/images/github.png' },
            { id: 13, name: 'Jira', image: '/images/jira.png' },
            { id: 14, name: 'Postman', image: '/images/postman.png' }
        ]
    }



]

export const EXPERIENCE = [
    {
        title: 'Desarrollador Frontend',
        company_name: 'Editorial Golfo Pacifico S.A de C.V,',
        description: [
            'Desarrollo y mantenimiento de sistema interno de ventas con Laravel, React y MySQL.',
            'Mantenimiento y mejora del porta corporativo en Drupal.',
            'Desarrollo de módulos personalizados utilizando la API de Drupal',
            'Integración de API de terceros con Drupal',
            'Proporcionar soporte técnico y orientación a los usuarios.'
        ],
        start_date: 'Ene 2022',
        end_date: 'Actualidad',
        skills: ''
    },
    {
        title: 'Desarrollador Web',
        company_name: 'Servicios de Agua Potable y Alcantarillado de Oaxaca (SAPAO)',
        description: [
            'Realicé entrevistas y encuestas con usuarios finales y partes interesadas para identificar necesidades y expectativas del producto.',
            'Desarrollé interfaces de usuario intuitivas y responsivas utilizando HTML, CSS y Bootstrap, mejorando la experiencia del usuario',
            'Escribí código eficiente y mantenible en PHP para implementar funcionalidades del lado del servidor.',
            'Implementé conexiones seguras entre la aplicación y la base de datos, utilizando consultas SQL.'
        ],
        start_date: 'Dic 2019',
        end_date: 'Ene 2022',
        skills: ''
    },
    {
        title: 'Desarrollador Web',
        company_name: 'Colaborador Freelance',
        description: [
            'Colaborador en el desarrollo de una aplicación web utilizando Laravel, MySQL y REACT.'
        ],
        start_date: 'Oct 2019',
        end_date: 'Mar 2021',
        skills: ''
    },
    {
        title: 'Desarrollador Web - Prácticas profesionales',
        company_name: 'Desarrollos Orientados a Eficiencia (Efisys)',
        description: [
            'Desarrollo del módulo “Prospección de crédito en campo – Modo Offline”.(Android, MySQL)'
        ],
        start_date: 'Ene 2019',
        end_date: 'Abr 2019',
        skills: ''
    },

]

export const MENU = [
    { title: 'Home', url: '/' },
    { title: 'Education', url: '/education' },
    { title: 'Experience', url: '/experience' },
    { title: 'Projects', url: '/projects' },
]

export const SOCIAL_NETWORKs = [
    { name: 'Likedin', icon: 'linkedin', url: "https://mx.linkedin.com/in/laura-ramos-alonso-923056223" },
    { name: 'Github', icon: 'git', url: "https://github.com/laura-ramos" },
]

export const EDUCATION = [
    {
        title: 'Ing En Tecnologías de la Información',
        college: 'Universidad Tecnologica de los Valles Centrales de Oaxaca',
        description: [
            'Avenida Universidad S/N, 71270 San Pablo Huixtepec, Oax.'
        ],
        start_date: 'Sep 2017',
        end_date: 'Abr 2019',
        url: "https://utvco.edu.mx/"
    },

    {
        title: 'TSU En Tecnologías de la Información',
        college: 'Universidad Tecnologica de los Valles Centrales de Oaxaca',
        description: [
            'Avenida Universidad S/N, 71270 San Pablo Huixtepec, Oax.'
        ],
        start_date: 'Sep 2015',
        end_date: 'Ag 2017',
        url: "https://utvco.edu.mx/"
    },

]

export const PROJECTS = [
    {
        title: 'PPSS',
        description: "",
        image: "/images/ppss.png",
        url: "https://drupal.org/project/ppss",
        color: "bg-lime-300"
    },
    {
        title: 'Stripe Gateway',
        description: "",
        image: "/images/stripe.png",
        url: "https://www.drupal.org/project/stripe_gateway",
        color: "bg-ping-300"
    },
    {
        title: 'Invoicing Mexican Sales',
        description: "",
        image: "/images/ims.png",
        url: "https://www.drupal.org/project/ims",
        color: "bg-orange-300"
    },
    {
        title: 'Bigin CRM integration',
        description: "",
        image: "/images/bigin.png",
        url: "https://www.drupal.org/project/bigin_crm",
        color: "bg-purple-300"
    },
    {
        title: 'Portfolio',
        description: "",
        image: "/images/portfolio.png",
        url: "/",
        color: "bg-purple-300"
    },

]