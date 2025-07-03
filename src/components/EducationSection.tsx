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
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2017 - 2019',
    description:
      "Specialized in Machine Learning and Web Technologies. Thesis on 'Scalable Web Application Architecture'.",
    gpa: '3.8/4.0',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of California, Berkeley',
    period: '2013 - 2017',
    description:
      'Comprehensive study of software development principles, algorithms, and system design.',
    gpa: '3.7/4.0',
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
