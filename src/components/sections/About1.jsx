import Image from 'next/image';

export default function About1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'About Us',
    subtitle = 'Our Story',
    description = 'We\'re a team of passionate developers and designers committed to creating exceptional digital experiences for businesses of all sizes.',
    image_url = '/placeholder-about.jpg',
  } = content || {};

  // Fallback team members if items are not provided
  const team = items?.length > 0
    ? items
    : [
        {
          id: '1',
          title: 'Rahul Desai',
          subtitle: 'Founder & Lead Barber',
          description:
            'With 15+ years of experience, Rahul is known for precision cuts, tailored beard styling, and luxury grooming experiences.',
          image_url: 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: '2',
          title: 'Amit Kapoor',
          subtitle: 'Senior Hair Stylist',
          description:
            'Amit crafts stylish haircuts suited to face shape and lifestyle. He stays updated with the latest men’s trends and fades.',
          image_url: 'https://images.unsplash.com/photo-1624395213081-608f51284ddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: '3',
          title: 'Karan Malhotra',
          subtitle: 'Beard Specialist',
          description:
            'Karan helps clients maintain sharp, well-shaped beards with clean lines and the perfect fade-to-beard transition.',
          image_url: 'https://images.unsplash.com/photo-1547558345-af5db4fe45ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: '4',
          title: 'Sameer Rathore',
          subtitle: 'Facial & Skincare Expert',
          description:
            'Sameer provides rejuvenating facials, charcoal treatments, and skincare routines tailored for men’s skin types.',
          image_url: 'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
        },
      ];

  return (
   <div id="about-section" className="py-12 sm:py-16 lg:py-24 bg-gray-800 shadow-inner">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* About section */}
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Text Content */}
        <div className="flex flex-col space-y-6 order-2 lg:order-1 text-left">
        {subtitle && (
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-50">
            {subtitle}
          </span>
        )}
        {title && (
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
            {description}
          </p>
        )}
      </div>


          {/* Image Section */}
          {image_url && (
            <div className="relative w-full max-w-xl mx-auto aspect-video overflow-hidden rounded-xl shadow-lg order-1 lg:order-2">
              <Image
                src={image_url}
                alt={title || 'About us'}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Team section */}
        {team.length > 0 && (
          <div className="bg-gray-500 py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Section Header */}
              <div className="mx-auto max-w-2xl text-center mb-12">
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white bg-gradient-to-r from-red-400 via-red-600 to-red-800 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
  Our Team
</h3>
<p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto leading-relaxed sm:text-xl">
  Meet the talented individuals who make our company great.
</p>

              </div>

              {/* Team Grid */}
             <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
  {team.map((member) => (
    <div
      key={member.id}
      className="text-center p-4 rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
    >
      <Image
        src={member.image_url}
        alt={member.title}
        width={300}
        height={300}
        className="mx-auto rounded-full object-cover transition duration-300 hover:brightness-90"
      />
      <h4 className="mt-4 text-lg font-semibold text-white">{member.title}</h4>
      <p className="text-red-300">{member.subtitle}</p>
      <p className="mt-2 text-sm text-gray-100">{member.description}</p>
    </div>
  ))}
</div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
