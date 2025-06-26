import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const GoogleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
      <title>Google</title>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.3 1.84-4.32 1.84-3.6 0-6.5-2.95-6.5-6.5s2.9-6.5 6.5-6.5c1.98 0 3.47.78 4.28 1.54l2.84-2.78C18.4 1.04 15.6.25 12.48.25c-5.46 0-9.92 4.45-9.92 9.92s4.46 9.92 9.92 9.92c5.22 0 9.4-4.2 9.4-9.92 0-.6-.05-1.18-.15-1.7H12.48z" fill="currentColor"/>
    </svg>
);

const MicrosoftIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <title>Microsoft</title>
        <path d="M11.4 22.5h-9V13.2h9v9.3zM22.5 22.5h-9V13.2h9v9.3zM11.4 11.4h-9V2.1h9v9.3zM22.5 11.4h-9V2.1h9v9.3z" fill="currentColor"/>
    </svg>
);

const AppleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <title>Apple</title>
        <path d="M12.02,2.91C11.13,2.9,9.93,3.48,9.08,4.52c-1.3,1.57-1.7,3.75-1.2,5.86 c0.79,3.31,3.48,5.4,6.2,5.4c0.55,0,1.15-0.15,1.81-0.45c0.59-0.27,1.19-0.67,1.83-1.21c-1.42-1.19-2.14-2.85-2.14-4.5 c0-1.89,0.85-3.6,2.23-4.79C17.31,4.28,15.1,2.92,12.02,2.91z M14.14,0.7c1.43-0.22,2.83,0.5,3.56,1.64 c0.73,1.14,0.71,2.69-0.08,3.83c-1.07,1.57-2.67,2.23-3.95,1.96c1.04-1.55,1.33-3.34,0.61-4.89C14.28,0.71,14.21,0.7,14.14,0.7z" fill="currentColor"/>
    </svg>
);

export function SocialLogins() {
  return (
    <div className="flex justify-center gap-4">
      <Button variant="ghost" size="icon" aria-label="Sign in with Google">
        <GoogleIcon />
      </Button>
      <Button variant="ghost" size="icon" aria-label="Sign in with GitHub">
        <Github className="h-5 w-5" />
      </Button>
       <Button variant="ghost" size="icon" aria-label="Sign in with Microsoft">
        <MicrosoftIcon />
      </Button>
       <Button variant="ghost" size="icon" aria-label="Sign in with Apple">
        <AppleIcon />
      </Button>
    </div>
  );
}
