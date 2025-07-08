import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

const education: Education[] = [
  {
    degree: 'BEng (Hons) in Software Engineering',
    institution:
      'Informatics Institute of Technology (IIT) – Affiliated with University of Westminster',
    period: '2021 - Present',
    description:
      'Focused on software architecture, full-stack development, algorithms, and engineering best practices through academic and project-based learning.',
    gpa: '',
  },
  {
    degree:
      'Secondary Education & G.C.E. Advanced Level (Physical Science Stream)',
    institution: 'D.S. Senanayake College, Colombo',
    period: '2012 - 2020',
    description:
      'Completed secondary education with Advanced Level specialization in Mathematics, Physics, and ICT, laying a strong foundation in analytical thinking and scientific reasoning.',
    gpa: '',
  },
  {
    degree: 'Primary and Junior Secondary Education',
    institution: 'Nangalla Muslim Maha Vidyalaya',
    period: '2007 - 2012',
    description:
      'Completed foundational education with a focus on literacy, numeracy, and general knowledge.',
    gpa: '',
  },
];

export function EducationSection() {
  return (
    <section id="education" className="container py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Education</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My academic background and formal training in computer science
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 mt-1 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="font-medium text-primary">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{edu.period}</Badge>
                      {edu.gpa && (
                        <Badge variant="outline">GPA: {edu.gpa}</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
