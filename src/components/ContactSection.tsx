import type React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbyLI1MWBnTllf7VxjQrDAJP2LpUPGCkDt5C7WWzt0GBnUaHjJ1c7Mg7uIdqDokhm85K/exec',
        {
          method: 'POST',
          body: form,
        }
      );

      if (!res.ok) throw new Error('Failed to send');

      setIsLoading(false);

      toast.success('Message sent successfully!');
    } catch (err) {
      console.error('Submit error:', err);
      setIsLoading(false);
      toast.error('Failed to send message.', {
        description: 'Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="container py-16 ">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I'm always open to discussing new opportunities and interesting
            projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 flex flex-col justify-center">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2 ">
                    <Mail className="w-5 h-5" /> Email
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="flex items-center gap-2 font-semibold mb-2">
                  <Mail className="w-5 h-5" /> Email
                </div> */}
                <a href="mailto:mujithaba2001@gmail.com">
                  <p className="text-muted-foreground">
                    mujithaba2001@gmail.com
                  </p>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2 ">
                    <Phone className="w-5 h-5" /> Phone
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="flex items-center gap-2 font-semibold mb-2">
                  <Phone className="w-5 h-5" /> Phone
                </div> */}
                <a href="tel:+94714309476">
                  <p className="text-muted-foreground">+94 (71) 430 9476</p>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-x-2 ">
                    <MapPin className="w-5 h-5" /> Location
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="flex items-center gap-2 font-semibold mb-2">
                  <MapPin className="w-5 h-5" /> Location
                </div> */}
                <p className="text-muted-foreground">Colombo, Sri Lanka.</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <p className="font-semibold mb-2">Send a Message</p> */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" required />
                  <Input name="lastName" placeholder="Last Name" required />
                </div>
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="subject" placeholder="Subject" required />
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  className="min-h-[120px]"
                  required
                />
                <Button
                  type="submit"
                  className="w-full gap-2"
                  isLoading={isLoading}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
