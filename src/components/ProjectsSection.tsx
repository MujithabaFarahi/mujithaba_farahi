import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Material-UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location-based services.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.',
    image: '/placeholder.svg?height=200&width=400',
    technologies: ['Gatsby', 'GraphQL', 'Styled Components', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
