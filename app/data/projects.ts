export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: 'Dashboard Web',
    description: 'Un panel administrativo moderno con gráficos y estadísticas en tiempo real.',
    image: '/projects/dashboard.png',
    github: 'https://github.com/usuario/dashboard-web',
    demo: 'https://dashboard-web.vercel.app',
    tags: ['React', 'TypeScript', 'Tailwind']
  },
  {
    title: 'E-commerce',
    description: 'Tienda online con carrito de compras y pasarela de pagos integrada.',
    image: '/projects/ecommerce.png',
    github: 'https://github.com/usuario/ecommerce',
    demo: 'https://ecommerce.vercel.app',
    tags: ['Next.js', 'Stripe', 'Tailwind']
  },
  {
    title: 'Blog Personal',
    description: 'Blog con soporte Markdown y dark mode para compartir artículos y tutoriales.',
    image: '/projects/blog.png',
    github: 'https://github.com/usuario/blog',
    demo: 'https://blog.vercel.app',
    tags: ['Next.js', 'MDX', 'Tailwind']
  },
];
