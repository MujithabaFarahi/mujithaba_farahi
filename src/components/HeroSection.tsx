import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <section className="container py-24 min-h-[90vh] md:py-32 flex justify-center items-center">
      <div className="space-y-8 text-center">
        <div className="h-10"></div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I'm <TypingName />
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-muted-foreground">
            Full-Stack Developer passionate about building modern, scalable web
            and mobile applications. I enjoy turning ideas into real-world
            solutions using technologies like React, Node.js, and Flutter.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={handleResumeDownload} className="gap-2 ">
            <Download className="w-4 h-4" />
            Download Resume
          </Button>

          <a
            href="https://www.github.com/MujithabaFarahi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>

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

          <a href="#contact">
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

const TypingName = () => {
  const fullText = 'Mujithaba Farahi';
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (index < fullText.length) {
      timer = setTimeout(() => {
        setDisplayed((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
    } else {
      timer = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.span
      className="text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayed}
    </motion.span>
  );
};
