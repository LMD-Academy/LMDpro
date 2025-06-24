import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function WelcomeBanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome back, User!</CardTitle>
        <CardDescription>
          Ready to continue your learning journey? Your personalized dashboard awaits.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Continue Learning</Button>
      </CardContent>
    </Card>
  );
}
