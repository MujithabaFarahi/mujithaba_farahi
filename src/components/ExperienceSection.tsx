import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description:
      'Lead development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description:
      'Built and maintained multiple client projects from conception to deployment. Collaborated with design team to implement pixel-perfect UIs.',
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Frontend Developer',
    company: 'WebSolutions Ltd.',
    period: '2019 - 2020',
    description:
      'Developed responsive web applications and improved site performance by 40%. Worked closely with UX team to enhance user experience.',
    technologies: ['JavaScript', 'React', 'SASS', 'Webpack'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My professional journey and the roles that shaped my expertise
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <p className="text-lg font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
