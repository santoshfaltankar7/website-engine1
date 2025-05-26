import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero2({ content, items, theme, config }) {
  // Fallback values  if content is not provided
  const {
    title = 'Welcome to our website',
    subtitle = 'Your subtitle here',
    description = 'This is a brief description of what you do. Add a few sentences to introduce your business to new visitors.',
    image_url = '/appimg.jpg',
    cta_text = 'Get Started',
    cta_link = '#',
  } = content || {};

  return (
    <div id="hero-section" className="relative w-full overflow-hidden bg-gray-800 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col space-y-6">
            {subtitle && (
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-blue-100 to-gray-200 font-sans">
  {subtitle}
</span>

            )}
            {title && (
           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-green-200 to-gray-300 animate-gradient-move">
  {title}
</h1>


            )}
            {description && (
              <p className="max-w-prose text-gray-100">
                {description}
              </p>
            )}
            {cta_text && cta_link && (
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-blue-600">
                  <Link href={cta_link}>{cta_text}</Link>
                </Button>
              </div>
            )}
          </div> 
          
          {image_url && (
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] w-full shadow-xl mt-">
              <Image
                src={image_url}
                alt={title || 'Hero image'}
                width={800}
                height={600}
                className="h-full w-full object-cover mt-10 rounded-2xl"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 