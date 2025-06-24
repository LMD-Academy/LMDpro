import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Community',
    price: '$0',
    frequency: '/ month',
    description: 'For individuals starting their learning journey.',
    features: ['Latest free Gemma Model', 'Limited resume exports', 'Selection of free courses'],
    cta: 'Get Started for Free',
    href: '/register',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$5.80',
    frequency: '/ month',
    description: 'For professionals aiming to accelerate their career.',
    features: ['Latest Flash Model', 'Unlimited resume exports', 'Full course catalog access', 'AI-powered research'],
    cta: 'Upgrade to Premium',
    href: '/register',
    popular: true,
  },
  {
    name: 'Teams',
    price: '$196',
    frequency: '/ month',
    description: 'For organizations that need to upskill their workforce.',
    features: ['All Premium features', 'Team management dashboard', 'Consolidated billing', 'Priority support'],
    cta: 'Contact Sales',
    href: '#',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Find the Perfect Plan
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Choose the plan that fits your learning style and career ambitions.
          Start for free, no credit card required.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className={`flex flex-col paper-cut-box ${tier.popular ? 'border-primary ring-2 ring-primary !shadow-accent' : ''}`}>
              <CardHeader className='p-0 pb-6'>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.frequency}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className='p-0 pt-6'>
                <Button asChild className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                  <Link href={tier.href}>{tier.cta}</Link>
                </Button>
              </CardFooter>
          </div>
        ))}
      </div>
    </section>
  );
}
