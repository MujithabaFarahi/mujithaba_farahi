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
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAA-123456',
    verifyUrl: 'https://aws.amazon.com/verification',
    description:
      'Demonstrated expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.',
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-789012',
    verifyUrl: 'https://cloud.google.com/certification',
    description:
      'Certified in building scalable and reliable applications on Google Cloud Platform using best practices and cloud-native technologies.',
  },
  {
    title: 'Meta React Developer Certificate',
    issuer: 'Meta (Facebook)',
    date: '2022',
    credentialId: 'META-RD-345678',
    verifyUrl: 'https://developers.facebook.com/certification',
    description:
      'Comprehensive certification covering React fundamentals, advanced patterns, testing, and performance optimization techniques.',
  },
  {
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2021',
    credentialId: 'MDB-DEV-901234',
    verifyUrl: 'https://university.mongodb.com/certification',
    description:
      'Expertise in MongoDB database design, querying, indexing, and application development with MongoDB drivers.',
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
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
