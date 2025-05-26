import Image from 'next/image';

export default function Services1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Services',
    subtitle = 'What We Offer',
    description = 'We provide a range of services to help your business succeed.',
    columns = '3',
  } = content || {};

  // Fallback services if items are not provided
  const services = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
         {
        id: '1',
        title: "Haircut & Styling",
        subtitle: "Professional Look",
        description: "Trendy haircuts and styling for every occasion and face shape.",
        icon: "scissors",
      },
      {
        id: '2',
        title: "Hair Coloring",
        subtitle: "Bold or Subtle",
        description: "From highlights to global coloring, we bring your hair color dreams to life.",
        icon: "palette",
      },
      {
        id: '3',
        title: "Facial Treatments",
        subtitle: "Glow Naturally",
        description: "Custom facials tailored to your skin type for a radiant look.",
        icon: "smile",
      },

      ];

  // Determine grid columns based on the columns setting
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  // Simple icon map for fallback icons
 const iconMap = {
  scissors: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  palette: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.65-.75 1.65-1.69 0-.43-.18-.83-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z" />
    </svg>
  ),
  smile: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 15s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  feather: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M20.24 12.24a6 6 0 0 0-8.48-8.48L2 13.5V22h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polygon points="12 2 15.09 8.26 22 9.27 
        17 14.14 18.18 21.02 12 17.77 
        5.82 21.02 7 14.14 2 9.27 
        8.91 8.26 12 2" />
    </svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
        5.5 0 0 0-7.78 7.78l1.06 
        1.06L12 21.23l7.78-7.78 
        1.06-1.06a5.5 5.5 0 0 0 
        0-7.78z" />
    </svg>
  ),
};

  return (
    <div id="services-section" className=" bg-gray-800 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          {subtitle && (
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-blue-950">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200-500 to-red-100">
  {title}
</h2>

          )}
          {description && (
            <p className="mt-4 text-gray-100 ">
              {description}
            </p>
          )}
        </div>

        <div className={`grid gap-8 ${gridCols}`}>
          {services.map((service) => (
           <div
  key={service.id || service.title}
  className="flex flex-col gap-3 rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  {service.icon && (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-400 to-yellow-400 text-white shadow-md">
      {iconMap[service.icon] || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      )}
    </div>
  )}
  {service.title && (
    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
  )}
  {service.description && (
    <p className="text-sm text-gray-400">{service.description}</p>
  )}
</div>

          ))}
        </div>
      </div>
    </div>
  );
} 