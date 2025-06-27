import * as React from 'react';
import { CheckCircle } from 'lucide-react';

interface KeyTakeawaysProps {
  children: React.ReactNode;
}

export function KeyTakeaways({ children }: KeyTakeawaysProps) {
  return (
    <div className="my-8 rounded-lg border border-l-4 border-l-primary bg-muted/50 p-6 shadow">
      <h3 className="mb-4 text-lg font-bold flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-primary" />
        Key Takeaways
      </h3>
      <ul className="space-y-3 list-none p-0">
        {React.Children.map(children, (child) => (
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">✓</span>
            <span className="text-muted-foreground">{child}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
