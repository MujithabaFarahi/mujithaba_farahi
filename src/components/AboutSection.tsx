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
              I'm a passionate full-stack developer with over 5 years of
              experience building web applications. I love turning complex
              problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and mentoring.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 font-medium">Frontend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Vue.js</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Backend</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
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
