'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'TestSite',
  tagline: 'Build, Test, and Perfect Your Layouts with Confidence',
  copyright: '© 2024 TestSite. Built for developers, by developers.',

  // Product links
  productLinks: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/api' },
    { label: 'Examples', href: '/examples' },
  ],

  // Company links
  companyLinks: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],

  // Support links
  supportLinks: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact', href: '/contact' },
    { label: 'Status', href: '/status' },
  ],

  // Legal links
  legalLinks: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],

  // Social links
  socialLinks: [
    {
      platform: 'GitHub',
      href: 'https://github.com',
      icon: 'github',
      label: 'Follow us on GitHub',
    },
    {
      platform: 'Twitter',
      href: 'https://twitter.com',
      icon: 'twitter',
      label: 'Follow us on Twitter',
    },
    {
      platform: 'Email',
      href: 'mailto:hello@testsite.com',
      icon: 'mail',
      label: 'Send us an email',
    },
  ],

  // Newsletter
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates and developer resources.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'mail':
        return <Mail className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <footer id="footer" className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-6">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">
                  <span data-editable="companyName">{config.companyName}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <span data-editable="tagline">{config.tagline}</span>
                </p>
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {config.socialLinks.map((social, idx) => (
                  <Button
                    key={idx}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLinkClick(social.href)}
                    data-editable-href={`socialLinks[${idx}].href`}
                    data-href={social.href}
                    aria-label={social.label}
                    className="h-9 w-9 p-0 hover:bg-accent hover:text-accent-foreground"
                  >
                    {renderIcon(social.icon)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-medium mb-4 text-sm">Product</h4>
              <ul className="space-y-3">
                {config.productLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`productLinks[${idx}].href`}
                      data-href={link.href}
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    >
                      <span data-editable={`productLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-medium mb-4 text-sm">Company</h4>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    >
                      <span data-editable={`companyLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="font-medium mb-4 text-sm">Support</h4>
              <ul className="space-y-3">
                {config.supportLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`supportLinks[${idx}].href`}
                      data-href={link.href}
                      className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground justify-start"
                    >
                      <span data-editable={`supportLinks[${idx}].label`}>{link.label}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-4 text-sm">
                <span data-editable="newsletterTitle">{config.newsletterTitle}</span>
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                <span data-editable="newsletterDescription">{config.newsletterDescription}</span>
              </p>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder={config.newsletterPlaceholder}
                  className="px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  data-editable="newsletterPlaceholder"
                />
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span data-editable="newsletterButtonText">{config.newsletterButtonText}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom section */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{config.copyright}</span>
            </p>

            <div className="flex space-x-6">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                >
                  <span data-editable={`legalLinks[${idx}].label`}>{link.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
