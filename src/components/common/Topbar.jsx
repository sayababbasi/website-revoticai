// // "use client";
// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

// // const Topbar = () => {
// //   const [isVisible, setIsVisible] = useState(true);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollY = window.scrollY;
// //       setIsVisible(scrollY < 180); // hide after ~180px
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div
// //       className={`fixed top-0 left-0 w-full bg-[#0a0a0a] text-[#f9fafb] text-sm py-2 px-4 md:px-10 
// //       flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 
// //       border-b border-[#facc15]/20 z-[60] transition-all duration-500 ease-in-out 
// //       ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
// //       style={{ height: "var(--topbar-h)" }}
// //     >
// //       {/* Left */}
// //       <div className="flex items-center gap-2 justify-center md:justify-start">
// //         <MapPin size={14} className="text-[#facc15]" />
// //         <p className="text-[13px] font-medium">
// //           Spring Valley, Bani Gala, Islamabad
// //         </p>
// //       </div>

// //       {/* Middle */}
// //       <div className="flex items-center justify-center gap-4">
// //         <Link
// //           href="https://facebook.com"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="hover:text-[#facc15] transition"
// //         >
// //           <Facebook size={15} />
// //         </Link>
// //         <Link
// //           href="https://instagram.com"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="hover:text-[#facc15] transition"
// //         >
// //           <Instagram size={15} />
// //         </Link>
// //         <Link
// //           href="https://linkedin.com"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="hover:text-[#facc15] transition"
// //         >
// //           <Linkedin size={15} />
// //         </Link>
// //       </div>

// //       {/* Right */}
// //       <div className="flex items-center justify-center md:justify-end gap-2 text-[13px] flex-wrap">
// //         <a
// //           href="mailto:contact.revoticai@gmail.com"
// //           className="hover:text-[#facc15] transition"
// //         >
// //           contact.revoticai@gmail.com
// //         </a>
// //         <span className="hidden md:inline text-gray-400">|</span>
// //         <a
// //           href="tel:+923160513841"
// //           className="hover:text-[#facc15] transition"
// //         >
// //           +92 316 0513841
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Topbar;


// // // "use client";
// // // import React from "react";
// // // import Link from "next/link";
// // // import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

// // // const Topbar = () => {
// // //   return (
// // //     <div
// // //       className="fixed top-0 left-0 w-full bg-[#0a0a0a] text-[#f9fafb] text-sm py-2 px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 border-b border-[#facc15]/20 z-[60]"
// // //       style={{ height: "var(--topbar-h)" }}
// // //     >
// // //       {/* Left */}
// // //       <div className="flex items-center gap-2">
// // //         <MapPin size={14} className="text-[#facc15]" />
// // //         <p className="text-[13px] font-medium">Spring Valley, Bani Gala, Islamabad</p>
// // //       </div>

// // //       {/* Middle */}
// // //       <div className="flex items-center gap-4">
// // //         <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition">
// // //           <Facebook size={15} />
// // //         </Link>
// // //         <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition">
// // //           <Instagram size={15} />
// // //         </Link>
// // //         <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#facc15] transition">
// // //           <Linkedin size={15} />
// // //         </Link>
// // //       </div>

// // //       {/* Right */}
// // //       <div className="flex items-center gap-2 text-[13px]">
// // //         <a href="mailto:contact.revoticai@gmail.com" className="hover:text-[#facc15] transition">contact.revoticai@gmail.com</a>
// // //         <span className="hidden md:inline text-gray-400">|</span>
// // //         <a href="tel:+923160513841" className="hover:text-[#facc15] transition">+92 316 0513841</a>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Topbar;


// "use client";
// import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
// import React, { useEffect, useState } from "react";

// const Topbar = () => {
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const onScroll = () => setVisible(window.scrollY < 150);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full bg-black text-white text-sm 
//       py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 
//       transition-all duration-500 z-[50] ${
//         visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
//       }`}
//     >
//       {/* Address */}
//       <div className="flex items-center gap-2">
//         <MapPin size={14} className="text-yellow-400" />
//         <p>Spring Valley, Bani Gala, Islamabad</p>
//       </div>

//       {/* Social Icons */}
//       <div className="flex gap-4">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <Facebook size={16} className="hover:text-yellow-400 transition" />
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <Instagram size={16} className="hover:text-yellow-400 transition" />
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <Linkedin size={16} className="hover:text-yellow-400 transition" />
//         </a>
//       </div>

//       {/* Email & Phone */}
//       <div className="flex gap-2 items-center flex-wrap justify-center">
//         <a
//           href="mailto:contact.revoticai@gmail.com"
//           className="hover:text-yellow-400"
//         >
//           contact.revoticai@gmail.com
//         </a>
//         <span className="hidden md:inline text-gray-400">|</span>
//         <a href="tel:+923160513841" className="hover:text-yellow-400">
//           +92 316 0513841
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0a0a0a] text-[#f9fafb] text-sm py-2 md:py-3 px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 border-b border-[#facc15]/20 z-[60]">
      {/* Left Section - Address */}
      <div className="flex justify-center md:justify-start items-center gap-2">
        <MapPin size={14} className="text-[#facc15]" />
        <p className="text-[13px] md:text-[14px] font-medium">
          Spring Valley, Bani Gala, Islamabad
        </p>
      </div>

      {/* Middle Section - Social Icons */}
      <div className="flex justify-center items-center gap-4">
        <Link href="https://facebook.com" target="_blank" className="hover:text-[#facc15] transition">
          <Facebook size={15} />
        </Link>
        <Link href="https://instagram.com" target="_blank" className="hover:text-[#facc15] transition">
          <Instagram size={15} />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="hover:text-[#facc15] transition">
          <Linkedin size={15} />
        </Link>
      </div>

      {/* Right Section - Email & Phone */}
      <div className="flex justify-center md:justify-end items-center flex-wrap gap-2 text-[13px] md:text-[14px]">
        <a href="mailto:contact.revoticai@gmail.com" className="hover:text-[#facc15] transition">
          contact.revoticai@gmail.com
        </a>
        <span className="hidden md:inline text-gray-400">|</span>
        <a href="tel:+923160513841" className="hover:text-[#facc15] transition">
          +92 316 0513841
        </a>
      </div>
    </div>
  );
};

export default Topbar;
