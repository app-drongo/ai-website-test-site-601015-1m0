'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Zap, Shield } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Test Your Layouts Like a Pro',
  subtitle:
    'A minimal testing environment for developers and designerss to preview, iterate, and perfect their web components with ease.',
  description:
    'Skip the complexity. Focus on what matters. Our streamlined testing platform gives you the tools to validate your designs quickly and efficiently.',
  ctaText: 'Start Testing',
  ctaHref: '/dashboard',
  secondaryCtaText: 'View Docss',
  secondaryCtaHref: '/docs',
  backgroundImage:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  backgroundAlt: 'Abstract technology background with geometric patterns',
  features: [
    { icon: 'Code', text: 'Clean Code Testing' },
    { icon: 'Zap', text: 'Lightning Fast' },
    { icon: 'Shield', text: 'Reliable Resultss' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="h-5 w-5" />;
      case 'Zap':
        return <Zap className="h-5 w-5" />;
      case 'Shield':
        return <Shield className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.backgroundImage}
          alt={config.backgroundAlt}
          fill
          className="object-cover"
          priority
          data-editable-src="backgroundImage"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span data-editable="title" className="text-foreground">
                {config.title}
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {config.features.map((feature, idx) => (
                <Card
                  key={idx}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3 text-primary">
                      {getIcon(feature.icon)}
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      <span data-editable={`features[${idx}].text`}>{feature.text}</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
