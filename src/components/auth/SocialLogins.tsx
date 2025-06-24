import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const GoogleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <title>Google</title>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.3 1.84-4.32 1.84-3.6 0-6.5-2.95-6.5-6.5s2.9-6.5 6.5-6.5c1.98 0 3.47.78 4.28 1.54l2.84-2.78C18.4 1.04 15.6.25 12.48.25c-5.46 0-9.92 4.45-9.92 9.92s4.46 9.92 9.92 9.92c5.22 0 9.4-4.2 9.4-9.92 0-.6-.05-1.18-.15-1.7H12.48z" fill="currentColor"/>
    </svg>
);

const MicrosoftIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <title>Microsoft</title>
        <path d="M11.4 22.5h-9V13.2h9v9.3zM22.5 22.5h-9V13.2h9v9.3zM11.4 11.4h-9V2.1h9v9.3zM22.5 11.4h-9V2.1h9v9.3z" fill="currentColor"/>
    </svg>
);

const AppleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <title>Apple</title>
        <path d="M17.46.2A6.33 6.33 0 0 0 12.13 2.9c-1.8.84-3.08 2.4-3.53 4.38-.5 2.22.1 4.3.91 6.12a10.02 10.02 0 0 0 3.53 4.67c.33.25.68.48 1.04.7.4.24.8.44 1.23.63.4.18.8.32 1.2.42.34.08.68.12 1.02.12.3 0 .6-.04.9-.12.48-.1.95-.26 1.4-.48.45-.22.88-.5 1.28-.83.25-.2.48-.42.7-.67a.4.4 0 0 0 .1-.5.4.4 0 0 0-.5-.2c-.2.13-.4.25-.6.37-.36.22-.75.4-1.16.53-.4.13-.8.2-1.2.2-.33 0-.66-.04-1-.12-.4-.1-.8-.25-1.18-.42a9.15 9.15 0 0 1-2.2-1.24 9.4 9.4 0 0 1-3.2-4.2c-.9-2.1-.98-4.43-.2-6.55A7.5 7.5 0 0 1 12.5 2a6.83 6.83 0 0 1 4.36-1.5c.3-.02.6-.02.9 0 .5.03 1 .12 1.5.28.48.18.95.4 1.4.67.24.15.5.07.65-.17a.48.48 0 0 0-.17-.65c-.5-.3-1.02-.55-1.58-.73A6.33 6.33 0 0 0 17.46.2zM15.3 6.8c.62-2.13-1.2-3.83-2.93-3.83-.8 0-1.7.4-2.4.95-.7.6-1.25 1.4-1.5 2.3-.6 2.1 1.2 3.8 2.9 3.8.8 0 1.7-.4 2.4-.9.58-.4.9-1.32.53-2.32z" fill="currentColor"/>
    </svg>
);

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"/>
    </svg>
)

export function SocialLogins() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <Button variant="outline">
        <GoogleIcon />
        <span className="ml-2">Google</span>
      </Button>
      <Button variant="outline">
        <Github className="h-4 w-4" />
        <span className="ml-2">GitHub</span>
      </Button>
       <Button variant="outline">
        <MicrosoftIcon />
        <span className="ml-2">Microsoft</span>
      </Button>
       <Button variant="outline">
        <AppleIcon />
        <span className="ml-2">Apple</span>
      </Button>
      <Button variant="outline" className="sm:col-span-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        <span className="ml-2">LinkedIn</span>
      </Button>
       <Button variant="outline">
        <XIcon />
        <span className="ml-2">X.com</span>
      </Button>
    </div>
  );
}
