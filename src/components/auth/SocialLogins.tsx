import { Button } from '@/components/ui/button';
import { Chrome, Github } from 'lucide-react';

const GoogleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <title>Google</title>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.3 1.84-4.32 1.84-3.6 0-6.5-2.95-6.5-6.5s2.9-6.5 6.5-6.5c1.98 0 3.47.78 4.28 1.54l2.84-2.78C18.4 1.04 15.6.25 12.48.25c-5.46 0-9.92 4.45-9.92 9.92s4.46 9.92 9.92 9.92c5.22 0 9.4-4.2 9.4-9.92 0-.6-.05-1.18-.15-1.7H12.48z" fill="currentColor"/>
    </svg>
);


export function SocialLogins() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline">
        <GoogleIcon />
        <span className="ml-2">Google</span>
      </Button>
      <Button variant="outline">
        <Github className="h-4 w-4" />
        <span className="ml-2">GitHub</span>
      </Button>
    </div>
  );
}
