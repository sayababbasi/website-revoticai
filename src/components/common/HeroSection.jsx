// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const slides = [
//   {
//     tag: "Case Study | Healthcare",
//     company: "amwell",
//     description:
//       "Improving customer satisfaction and accelerating delivery of new telehealth services with a fully-automated software deployment process.",
//     image: "/assets/images/hero.jpg",
//     buttonText: "Read case study",
//   },
//   {
//     tag: "Case Study | Retail AI",
//     company: "Agentic Commerce",
//     description:
//       "Revolutionizing retail with personalized, AI-driven automation for next-generation customer experience.",
//     image: "/assets/images/hero1.webp",
//     buttonText: "Explore more",
//   },
//   {
//     tag: "Case Study | Finance",
//     company: "FinEdge",
//     description:
//       "Delivering secure, cloud-based fintech solutions through intelligent automation and digital platforms.",
//     image: "/assets/images/hero3.webp",
//     buttonText: "View project",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative w-full overflow-hidden bg-black text-white">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className="w-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh] md:min-h-screen bg-black">
//               {/* Left Content */}
//               <div className="w-full md:w-1/2 px-8 md:px-16 lg:px-24 py-16 md:py-0 z-10">
//                 <p className="text-gray-300 mb-2 text-sm uppercase tracking-wide">
//                   {slide.tag}
//                 </p>
//                 <h1 className="text-5xl font-bold mb-6 text-white">
//                   {slide.company}
//                 </h1>
//                 <p className="text-gray-300 leading-relaxed mb-8">
//                   {slide.description}
//                 </p>
//                 <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300">
//                   {slide.buttonText}
//                 </button>
//               </div>

//               {/* Right Image */}
//               <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
//                 <img
//                   src={slide.image}
//                   alt={slide.company}
//                   className="object-cover w-full h-full opacity-90"
//                 />
//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent md:block hidden" />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Swiper pagination dots styling */}
//       <style jsx global>{`
//         .swiper-pagination {
//           bottom: 30px !important;
//         }
//         .swiper-pagination-bullet {
//           background: #ccc !important;
//           opacity: 0.5;
//         }
//         .swiper-pagination-bullet-active {
//           background: #b1ff32 !important;
//           opacity: 1;
//         }
//       `}</style>

//       {/* OUR EXPERTISE SECTION */}
//       <div className="bg-black text-white py-20 px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold mb-12">Our expertise.</h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-gray-300">
//           {[
//             { title: "Artificial intelligence & data", icon: "🤖" },
//             { title: "Software development & QA", icon: "💻" },
//             { title: "Strategy & business consulting", icon: "📊" },
//             { title: "Enterprise platform implementation", icon: "🧱" },
//             { title: "New product innovation", icon: "🚀" },
//             { title: "Cloud & security", icon: "☁️" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="group flex flex-col items-start transition-transform hover:translate-y-[-5px]"
//             >
//               <span className="text-3xl mb-3 group-hover:text-lime-400 transition">
//                 {item.icon}
//               </span>
//               <h4 className="font-semibold text-white group-hover:text-lime-400">
//                 {item.title}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    tag: "CASE STUDY | HEALTHCARE",
    company: "amwell",
    description:
      "Improving customer satisfaction and accelerating delivery of new telehealth services with a fully-automated software deployment process.",
    image: "/assets/images/hero.jpg",
    buttonText: "Read case study",
  },
  {
    tag: "CASE STUDY | RETAIL AI",
    company: "Agentic Commerce",
    description:
      "Revolutionizing retail with personalized, AI-driven automation for next-generation customer experience.",
    image: "/assets/images/hero1.webp",
    buttonText: "Explore more",
  },
  {
    tag: "CASE STUDY | FINANCE",
    company: "FinEdge",
    description:
      "Delivering secure, cloud-based fintech solutions through intelligent automation and digital platforms.",
    image: "/assets/images/hero3.webp",
    buttonText: "View project",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-[85vh] md:min-h-[90vh]">
              {/* Left Text Section */}
              <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-24 py-16 md:py-0">
                <p className="text-gray-400 text-sm mb-3 tracking-wider uppercase">
                  {slide.tag}
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 capitalize">
                  {slide.company}
                </h1>
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg">
                  {slide.description}
                </p>
                <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Image Section */}
              <div className="relative w-full md:w-1/2 h-[45vh] md:h-[90vh]">
                <img
                  src={slide.image}
                  alt={slide.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l via-black/40 to-transparent" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          background: #999 !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #ffcc00 !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
