import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    title: 'MERN Developer Certificate',
    issuer: 'University of Colombo School of Computing',
    date: '2024 Feb',
    credentialId: 'CSC/MS/2023/GR_02/021',
    verifyUrl: 'https://ucsc.cmb.ac.lk/verify/CSC/MS/2023/GR_02/021',
    description:
      'Completed a full-stack development course covering MongoDB, Express.js, React, and Node.js, with hands-on project experience.',
  },
  {
    title: 'CS50x – Introduction to Computer Science',
    issuer: 'Harvard University (via edX)',
    date: '2024 Jan',
    credentialId: 'd28ca4f9-7913-4d16-8369-c5690e87812b',
    verifyUrl:
      'https://certificates.cs50.io/d28ca4f9-7913-4d16-8369-c5690e87812b.pdf?size=A4',
    description:
      'Completed Harvard’s introductory course covering algorithms, data structures, web development, and fundamental computer science principles.',
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="container py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Certificates</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Professional certifications and achievements that validate my
            expertise
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 mt-1 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="font-medium text-primary">{cert.issuer}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary">{cert.date}</Badge>
                      {cert.credentialId && (
                        <Badge variant="outline" className="text-xs">
                          ID: {cert.credentialId}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
                {cert.verifyUrl && (
                  <a href={cert.verifyUrl} target="_blank">
                    <Button size="sm" variant="outline" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Verify Certificate
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
