import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="container py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Learn more about my background, skills, and what drives my passion
            for development
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I'm a passionate full-stack developer currently pursuing a degree
              in Software Engineering, with hands-on experience building web and
              mobile applications using technologies like React, Node.js, and
              Flutter. I enjoy crafting clean, scalable, and user-friendly
              solutions that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              When I’m not coding, you’ll likely find me exploring new tech,
              working on side projects, or staying active through sports and
              outdoor activities.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 font-medium">Frontend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>React.js</li>
                    <li>Flutter</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Backend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>REST Api</li>
                    <li>Prisma ORM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Databases</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Tools & DevOps</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>AWS (S3, Pinpoint)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
