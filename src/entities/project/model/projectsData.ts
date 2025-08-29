import type { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase my projects and skills.',
    links: {
      live: 'https://georgekuhtov.github.io/portfolio',
      github: 'https://github.com/GeorgeKuhtov/portfolio-site',
    },
    tags: ['React', 'TypeScript', 'SCSS', 'Vite'],
    image: '/images/portfolio.jpg',
    status: 'in-progress',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    description:
      'Modern admin dashboard for e-commerce management with real-time analytics.',
    links: {
      demo: '#',
      github: '#',
    },
    tags: ['React', 'Chart.js', 'Tailwind CSS'],
    image: '/images/dashboard.jpg',
    status: 'completed',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'Responsive weather application with location-based forecasts.',
    links: {
      demo: '#',
    },
    tags: ['JavaScript', 'OpenWeather API', 'CSS Grid'],
    image: '/images/weather.jpg',
    status: 'completed',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Manager',
    description:
      'Collaborative task management platform with drag-and-drop functionality.',
    links: {
      demo: '#',
      github: '#',
    },
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    image: '/images/tasks.jpg',
    status: 'planned',
    featured: false,
  },
];

// Функции для работы с данными
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter((project) => project.featured);
};

export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projectsData.filter((project) => project.status === status);
};
