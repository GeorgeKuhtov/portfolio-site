export interface Project {
  id: number;
  title: string;
  description: string;
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
  tags: string[];
  image: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
}
