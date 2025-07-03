import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  const handleResumeDownload = () => {
    const url = '/Mujithaba_Farahi_Resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mujithaba_Farahi_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="container py-24 md:min-h-screen md:py-32">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="h-10"></div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I'm <span className="text-primary">Mujithaba Farahi</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer & UI/UX Designer passionate about creating
            beautiful, functional web experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={handleResumeDownload} className="gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
          <Button variant="outline" className="gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>

          <a
            href="https://www.linkedin.com/in/mujithaba-farahi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>

          <a href="#contact" className="">
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
