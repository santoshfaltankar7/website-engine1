import Image from 'next/image';
import Link from 'next/link';

export default function Footer2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Your Company',
    copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    image_url,
  } = content || {};

  // Process social links
  const socialLinks = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        { title: 'Twitter', icon: 'twitter', cta_link: 'https://twitter.com' },
        { title: 'Facebook', icon: 'facebook', cta_link: 'https://facebook.com' },
        { title: 'Instagram', icon: 'instagram', cta_link: 'https://instagram.com' },
        { title: 'LinkedIn', icon: 'linkedin', cta_link: 'https://linkedin.com' },
      ];

  // Simple icon map for social icons
  const iconMap = {
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
    facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    youtube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  };

  return (
    <footer className="bg-gray-500 border-t">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-4">
            {image_url ? (
              <Link href="/" className="block">
                <Image
                  src={image_url}
                  alt={title}
                  width={120}
                  height={40}
                  className="h-auto w-auto"
                />
              </Link>
            ) : (
              <Link href="/" className="text-xl font-bold">
                {title}
              </Link>
            )}
          </div>

          {/* Social links */}
          <div className="mb-6 flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.cta_link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label={link.title}
              >
                {link.icon && iconMap[link.icon.toLowerCase()] ? (
                  iconMap[link.icon.toLowerCase()]
                ) : (
                  <span className="text-xs">{link.title.charAt(0)}</span>
                )}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
} 