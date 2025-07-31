export const SKILLS = [
  {
    name: 'Backend',
    image: "/images/frontend.png",
    skills: [
      { name: 'PHP', image: '/portfolio/images/php.png' },
      { name: 'Drupal', image: '/portfolio/images/drupal.png' },
      { name: 'Laravel', image: '/portfolio/images/laravel.png' },
      { name: 'Python', image: '/portfolio/images/python.png' },
    ]
  },
  {
    name: 'Frontend',
    image: "/images/backend.png",
    skills: [
      { name: 'Javascript', image: '/portfolio/images/js.png' },
      { name: 'React', image: '/portfolio/images/React.webp' },
      { name: 'HTML5', image: '/portfolio/images/html.png' },
      { name: 'CSS3', image: '/portfolio/images/css.png' },
      { name: 'Tailwind', image: '/portfolio/images/tailwind.png' },
      { name: 'Bootstrap', image: '/portfolio/images/bootstrap.png' },
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'GIT', image: '/portfolio/images/git.png' },
      { name: 'GITHUB', image: '/portfolio/images/github.png' },
      { name: 'Jira', image: '/portfolio/images/jira.png' },
      { name: 'Postman', image: '/portfolio/images/postman.png' },
      { name: 'Docker', image: '/portfolio/images/docker.png' },
    ]
  }

]

export const EXPERIENCE = [
  {
    title: 'Programador Full Stack',
    company_name: 'Editorial Golfo Pacifico S.A de C.V,',
    description: [
      'Desarrollo y mantenimiento integral del sistema interno de ventas de la empresa, utilizando Laravel como backend, React para la interfaz de usuario y MySQL como base de datos.',
      'Mantenimiento y mejora de sitios web en Drupal, asegurando su seguridad, estabilidad y rendimiento.',
      'Creación de módulos personalizados de Drupal para ampliar la funcionalidad de los sitios web, permitiendo a la empresa ofrecer nuevas características y servicios con la integración de diferentes APIs.',
      'Gestión eficiente de solicitudes de soporte a través de la herramienta Service Desk, resolviendo problemas técnicos y funcionales de los usuarios y coordinando el mantenimiento preventivo de equipos de cómputo.'
    ],
    start_date: 'Ene 2022',
    end_date: 'Actualidad',
    skills: ["Drupal", "Laravel", "PHP", "React", "Tailwind", "Docker", "Jira", "Python", "Bootstrap"]
  },
  {
    title: 'Desarrollador Web',
    company_name: 'Servicios de Agua Potable y Alcantarillado de Oaxaca (SAPAO)',
    description: [
      "Recopilar, analizar y documentar los requerimientos del usuario.",
      "Diseño y desarrollo de interfaces de usuario intuitivas y atractivas.",
      "Desarrollo de aplicaciones web robustas y escalables utilizando PHP para la lógica del servidor, AngularJS para el front-end  y SQL Server como base de datos."

    ],
    start_date: 'Dic 2019',
    end_date: 'Ene 2022',
    skills: ["PHP", "SQL Server", "AngularJS"]
  },
  {
    title: 'Desarrollador Web',
    company_name: 'Colaborador Freelance',
    description: [
      'Participación en el desarrollo de una aplicación web utilizando Laravel para el backend, MySQL para la gestión de la base de datos, y React para la interfaz de usuario.'
    ],
    start_date: 'Oct 2019',
    end_date: 'Mar 2021',
    skills: ["Laravel", "React", "Bootstrap", "MySQL"]
  },
  {
    title: 'Desarrollador Web - Prácticas profesionales',
    company_name: 'Desarrollos Orientados a Eficiencia (Efisys)',
    description: [
      'Desarrollo del módulo "Prospección de crédito en campo – Modo Offline", implementando una solución para la gestión de datos offline. Utilizando SQLite para el almacenamiento local para despues ser sinconizado a la base de datos central.'
    ],
    start_date: 'Ene 2019',
    end_date: 'Abr 2019',
    skills: ["Android", "MySQL", "SQLite"]
  },

]

export const MENU = [
  { title: 'Home', url: '#' },
  { title: 'Skills', url: '#skills' },
  { title: 'Education', url: '#education' },
  { title: 'Experience', url: '#experience' },
  { title: 'Projects', url: '#projects' },
]

export const SOCIAL_NETWORKs = [
  { name: 'Likedin', icon: 'linkedin', url: "www.linkedin.com/in/laura-ramos-dev" },
  { name: 'Github', icon: 'github', url: "https://github.com/laura-ramos" },
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
    title: 'Stripe Gateway',
    description: "The main purpose of this module is process service payments with Stripe, allow Drupal users to subscribe to Stripe plans and have one or more Drupal roles.",
    image: "/portfolio/images/stripe.png",
    url: "https://www.drupal.org/project/stripe_gateway",
    color: "bg-ping-300",
    skills: ["Drupal", "PHP", "Stripe API"]
  },
  {
    title: 'Invoicing Mexican Sales',
    description: "Allows site to invoicing in compliance with mexican laws service. By now, module only works with Factura Digital México service to generate invoices.",
    image: "/portfolio/images/ims.png",
    url: "https://www.drupal.org/project/ims",
    color: "bg-orange-300",
    skills: ["Drupal", "PHP"]
  },
  {
    title: 'Bigin CRM integration',
    description: "The main purpouse of this module is add all your Drupal new users accounts like prospects in Bigin CRM, the new kid on the block of Zoho familiy. Uses the Bigin Rest APIs to provide integration.",
    image: "/portfolio/images/bigin.png",
    url: "https://www.drupal.org/project/bigin_crm",
    color: "bg-purple-300",
    skills: ["Drupal", "PHP", "Bigin CRM API"]
  },
  {
    title: 'Portfolio',
    description: "",
    image: "/portfolio/images/portfolio.png",
    url: "/",
    color: "bg-purple-300",
    skills: ["React", "Tailwind", "Daisy UI"]
  },

]