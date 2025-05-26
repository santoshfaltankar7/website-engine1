// Fallback mock data in case of errors or for development
export const MOCK_DATA = {
  site: {
    id: "site-123",
    name: "D2D Business Solutions",
  },
  siteMeta: {
    title: "D2D Business Solutions",
    description:
      "Professional web development and social media marketing services",
    og_image: "/images/og-image.jpg",
    favicon: "/favicon.ico",
    keywords: "web development, marketing, business, social media",
    twitter_handle: "@d2dbusiness",
  },
  pages: {
    home: {
      id: "page-home",
      title: "Home Page",
      slug: "home",
    },
    about: {
      id: "page-about",
      title: "About Us",
      slug: "about",
    },
    services: {
      id: "page-services",
      title: "Our Services",
      slug: "services",
    },
    contact: {
      id: "page-contact",
      title: "Contact Us",
      slug: "contact",
    },
  },
  sections: [

    {
            id: "8d8d8b47-f240-4b64-9f8a-c0f72c737ced",
            page_id: "a6452a55-af24-40db-9490-42852c3e7b9a",
            type: "header",
            variant: "3",
            position: 1,
            is_active: true,
            content: {
              id: "9b742a78-b86f-4a6a-9f0c-f39747ec5d3f",
              section_id: "8d8d8b47-f240-4b64-9f8a-c0f72c737ced",
              title: "Capsula Men's Grooming",
              subtitle: "Subtitle",
              description: "Description for the new section",
              image_url: "https://i.ibb.co/2LcZ3BQ/logo.webp",
              
              cta_text: "Get Started",
              cta_link: "/contact"
            },
            items: [
                    { title: "Home", cta_link: "#hero-section", position: 1 },
        { title: "About", cta_link: "#about-section", position: 2 },
        { title: "Services", cta_link: "#services-section", position: 3 },
        { title: "Contact", cta_link: "#contact-section", position: 4 }

            ]
          },

    {
      id: "d7592df9-ae00-40a2-bdc5-fdddf326e59a",
      type: "hero",
      variant: "2",
      position: 2,
      is_active: true,
      content: {
      title: "Capsula Men's Grooming",
     subtitle: "Devfrend Web Solution", 
      description: "Capsula Men's Grooming is a modern barber shop offering premium haircuts, beard styling, and grooming services. Combining classic techniques with contemporary style, we deliver a sharp, refreshing experience for today’s gentleman.",
     image_url: "/appimg.jpg",
     background_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuvptxXq2brOwS1HWvVkgAn1jWkfmwVgV-w&s",
     cta_text: "Get Started",
     cta_link: "/contact"
      },
      items: [],
    },
    {
      id: "a088a10c-5616-42c0-a90a-c5b19544c757",
      type: "services",
      variant: "1",
      position: 3,
      is_active: true,
      content: {
               id: "9122a11d-fcb9-4109-a182-8f45fa2a3df1",
              section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
              title: "Our Services",
              subtitle: null,
              description: "Capsula Men's Grooming offers professional haircuts, beard styling, shaves, and skincare services tailored for modern men. Experience top-quality grooming in a stylish and relaxing environment..",
              image_url: null,
              background_url: null,
              cta_text: "View All Services",
              cta_link: "/services",
      },
      items: [
        {
              id: "697983ce-5f8b-46db-89be-22e6471f3f5a",
                section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
                title: "Haircut & Styling",
                subtitle: "Professional Look",
                description: "Trendy haircuts and styling for every occasion and face shape.",
                icon: "scissors",
                image_url: "https://via.placeholder.com/400x300",
                rating: null,
                price: null,
                duration: null,
                tag: null,
                position: 0
              },
              {
                id: "8838565f-e964-40be-b8b8-5c0e38180d80",
                section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
                title:"Hair Coloring",
                subtitle: "Bold or Subtle",
                description:  "From highlights to global coloring, we bring your hair color dreams to life.",
                icon: "palette",
                image_url: "https://via.placeholder.com/400x300",
              rating: null,
                price: null,
                duration: null,
                tag: null,
                position: 1
              },
              {
                id: "19d93208-162d-46b8-a57c-69294d21ab14",
                section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
                title: "Facial Treatments",
                subtitle:  "Glow Naturally",
                description:"Custom facials tailored to your skin type for a radiant look.",
                icon: "smile",
                image_url: "https://via.placeholder.com/400x300",
                rating: null,
                price: null,
                duration: null,
                tag: null,
                position: 2
              }
      ],
    },
    {
            id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
            page_id: "a6452a55-af24-40db-9490-42852c3e7b9a",
            type: "testimonial",
            variant: "1",
            position: 4,
            is_active: true,
            content: {
              id: "48813f16-3aea-471a-8df6-b3f999c5617d",
              section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
              title: "Client Feedback",
              subtitle: "Men’s Salon Testimonials",
              description: "Our clients share their grooming experience and satisfaction with our expert barbers and premium services..",
              image_url: null,
              background_url: null,
              cta_text: null,
              cta_link: null
            },
            items: [
              {
                id: "574ffd62-8291-4c24-9996-0022ae00bb93",
                section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
                title: "David Miller",
                subtitle: "Regular Client",
                description: "Absolutely the best haircut I've ever had. The attention to detail and professionalism is unmatched!",
                icon: null,
                image_url: "https://images.unsplash.com/photo-1547558345-af5db4fe45ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
                rating: 5,
                price: null,
                duration: null,
                tag: null,
                position: 0
              },
              {
                id: "8f60eb15-48cb-4332-9eb8-069c06116102",
                section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
                title: "Alex Johnson",
                subtitle: "Corporate Clien",
                description: "Quick, clean, and stylish. Perfect grooming for professionals who want to look sharp with minimal fuss.",
                icon: null,
                image_url: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
                rating: 5,
                price: null,
                duration: null,
                tag: null,
                position: 1
              },
              {
                id: "350c0ae3-a23d-4f07-988d-cc5d384732f7",
                section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
            title: "Rahul Gupta",
                subtitle: "First-Time Visitor",
                description: "I was blown away by the beard styling service. They listened to exactly what I wanted and nailed the look.",
                icon: null,
                image_url: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
                rating: 4,
                price: null,
                duration: null,
                tag: null,
                position: 2
              }
            ]
          },
    {
   id: "53760ad3-06dc-43f9-ad66-c42937f90aeb",
            page_id: "a6452a55-af24-40db-9490-42852c3e7b9a",
            type: "about",
            variant: "1",  
            position: 3,
            is_active: true,
            content: {
              id: "c401e429-d283-45bb-948d-4b4485b97e6c",
              section_id: "53760ad3-06dc-43f9-ad66-c42937f90aeb",
              title: "About Capsula Men's Grooming",
              subtitle: "Crafted for the Modern Gentleman",
              description: "At Capsula, we blend classic barbering with modern style to create a grooming experience like no other. From precision haircuts to premium beard care and relaxing facials, our skilled barbers ensure you leave looking sharp and feeling confident. Step into a space designed just for men and walk out renewed.",
              image_url: "https://plus.unsplash.com/premium_photo-1664298276581-68eb4360ebcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2Fwc3VsYSUyME1lbidzJTIwR3Jvb21pbmd8ZW58MHx8MHx8fDA%3D",
              background_url: null,
              cta_text: null,
              cta_link: null
            },
            items: []
          },
    
    // {
    //   id: "section-faq",
    //   type: "faq",
    //   variant: "1",
    //   position: 5,
    //   is_active: true,
    //   content: {
    //     title: "Frequently Asked Questions",
    //     subtitle: "Common Questions",
    //   },
    //   items: [
    //     {
    //       id: "faq-1",
    //       title: "How long does it take to build a website?",
    //       description:
    //         "Most websites can be completed within 2-4 weeks, depending on complexity and content requirements.",
    //       position: 1,
    //     },
    //     {
    //       id: "faq-2",
    //       title: "Do you provide ongoing support?",
    //       description:
    //         "Yes, we offer various maintenance packages to keep your website updated and secure.",
    //       position: 2,
    //     },
    //     {
    //       id: "faq-3",
    //       title: "How much does a website cost?",
    //       description:
    //         "Our pricing varies based on your specific needs. Contact us for a personalized quote.",
    //       position: 3,
    //     },
    //   ],
    // },
    {
      id: "section-contact",
      type: "contact",
      variant: "1",
      position: 6,
      is_active: true,
      content: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        description:
          "Have questions or want to book an appointment? Get in touch with Capsula Men’s Grooming — we’re here to help you look and feel your best!."
      },
      items: []
    },
    
          {
            id: "0a07df4f-b9fb-45f5-843a-f5ae513d0e61",
            page_id: "a6452a55-af24-40db-9490-42852c3e7b9a",
            type: "footer",
            variant: "1",
            position: 6,
            is_active: true,
            content: {
              id: "0c6e2e4e-78dd-4e53-b5f6-2c9b793feccc",
              section_id: "0a07df4f-b9fb-45f5-843a-f5ae513d0e61",
              title: "Capsula Men's Grooming",
              subtitle: "Subtitle",
              description: "Crafting confidence with every cut. Style. Precision. You.",
              image_url: null,
              background_url: null,
              cta_text: null,
              cta_link: null
            },
            items: []
          },
  ],
  theme: {
    primarysite: "#4F46E5",
    primary_hover: "#4338CA",
    secondary: "#10B981",
    secondary_hover: "#059669",
    accent: "#F59E0B",
    accent_hover: "#D97706",
    background: "#FFFFFF",
    foreground: "#1F2937",
    muted: "#F3F4F6",
    border: "#E5E7EB",
    card: "#FFFFFF",
    card_foreground: "#1F2937",
    error: "#EF4444",
    success: "#10B981",
    footer: "#1F2937",
    footer_text: "#F9FAFB",
    overlay_dark: "rgba(0, 0, 0, 0.7)",
    overlay_light: "rgba(255, 255, 255, 0.7)",
    overlay_medium: "rgba(0, 0, 0, 0.5)",
  },
  config: {
    font_body: "Inter",
    font_heading: "Poppins",
    font_body_weights: ["400", "500", "600"],
    font_heading_weights: ["600", "700"],
    max_width: "1200px",
    radius_lg: "0.5rem",
    radius_md: "0.375rem",
    radius_sm: "0.25rem",
    radius_full: "9999px",
  },
};
