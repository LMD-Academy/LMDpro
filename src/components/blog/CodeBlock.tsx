
import { cn } from '@/lib/utils';
import { ClipboardCopy } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function CodeBlock({ children, className, title }: CodeBlockProps) {
  const { toast } = useToast();
  
  const handleCopy = () => {
    if(typeof children === 'string') {
        navigator.clipboard.writeText(children);
        toast({
            title: "Code Copied!",
            description: "The code has been copied to your clipboard.",
        })
    }
  }

  return (
    <div className={cn('my-6 rounded-lg border bg-[#0d1117] shadow-lg', className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
          {title && <span className="ml-2 text-xs text-gray-400">{title}</span>}
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:bg-gray-700 hover:text-white" onClick={handleCopy}>
            <ClipboardCopy className="h-4 w-4" />
            <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="overflow-x-auto p-4 text-white">
        <pre><code className="font-code text-sm">{children}</code></pre>
      </div>
    </div>
  );
}
