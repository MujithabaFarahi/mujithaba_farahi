import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
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
            <Button variant="ghost" size="icon">
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-4 h-4" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
