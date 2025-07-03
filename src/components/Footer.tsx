import { Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="flex justify-center w-full px-4 border-t bg-background md:px-6 lg:px-8">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Mujithaba Farahi. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.github.com/MujithabaFarahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/mujithaba-farahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a
              href="https://www.facebook.com/mujithabafarahi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </a>
            <a
              href="mailto:mujithaba2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
