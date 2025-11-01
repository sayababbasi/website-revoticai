module.exports = [
"[project]/revoticai/src/components/common/Navbar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // // "use client";
// // // import React, { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { Menu, X } from "lucide-react";
// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [shadow, setShadow] = useState(false);
// // //   const navItems = [
// // //     "Home",
// // //     "About",
// // //     "Services",
// // //     "Portfolio",
// // //     "Experts",
// // //     "Blogs",
// // //     "Contact",
// // //     "Verify",
// // //   ];
// // //   useEffect(() => {
// // //     const onScroll = () => setShadow(window.scrollY > 150);
// // //     window.addEventListener("scroll", onScroll);
// // //     return () => window.removeEventListener("scroll", onScroll);
// // //   }, []);
// // //   return (
// // //     <>
// // //       {/* Main Navbar */}
// // //       <nav
// // //         className={`fixed w-full left-0 transition-all duration-300 z-[60] ${
// // //           shadow ? "top-0 shadow-md" : "top-[40px]"
// // //         } bg-white`}
// // //       >
// // //         <div className="flex justify-between items-center px-6 md:px-10 py-3">
// // //           {/* Logo */}
// // //           <Link href="/" className="flex items-center gap-2">
// // //             <Image
// // //               src="/assets/images/logo.png"
// // //               alt="RevoticAi Logo"
// // //               width={120}
// // //               height={50}
// // //               priority
// // //             />
// // //           </Link>
// // //           {/* Desktop Menu */}
// // //           <div className="hidden md:flex items-center gap-6 text-[#0a0a0a] font-medium">
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item}
// // //                 href={`/${item === "Home" ? "" : item.toLowerCase()}`}
// // //                 className="hover:text-[#facc15] transition"
// // //               >
// // //                 {item}
// // //               </Link>
// // //             ))}
// // //             <Link
// // //               href="/quote"
// // //               className="bg-[#facc15] text-[#0a0a0a] px-5 py-2 rounded-full hover:bg-[#e5b900] transition"
// // //             >
// // //               Book A Free Call
// // //             </Link>
// // //           </div>
// // //           {/* Mobile Menu Toggle */}
// // //           <button
// // //             className="md:hidden text-[#0a0a0a]"
// // //             onClick={() => setIsOpen((s) => !s)}
// // //             aria-label={isOpen ? "Close menu" : "Open menu"}
// // //           >
// // //             {isOpen ? <X size={26} /> : <Menu size={26} />}
// // //           </button>
// // //         </div>
// // //       </nav>
// // //       {/* Mobile Overlay */}
// // //       {isOpen && (
// // //         <div
// // //           id="menu-overlay"
// // //           className="fixed inset-0 bg-black/40 z-[70] flex md:hidden"
// // //           aria-hidden={!isOpen}
// // //         >
// // //           <div className="w-72 bg-[#f9fafb] h-full p-6 ml-auto relative animate-slide-in-right">
// // //             <button
// // //               onClick={() => setIsOpen(false)}
// // //               className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
// // //               aria-label="Close mobile menu"
// // //             >
// // //               <X size={26} />
// // //             </button>
// // //             {/* Mobile Logo */}
// // //             <div className="flex items-center gap-2 mb-8 mt-2">
// // //               <Image
// // //                 src="/assets/images/logo.png"
// // //                 alt="RevoticAi Logo"
// // //                 width={100}
// // //                 height={100}
// // //               />
// // //             </div>
// // //             {/* Navigation Links */}
// // //             <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10">
// // //               {navItems.map((item) => (
// // //                 <Link
// // //                   key={item}
// // //                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
// // //                   onClick={() => setIsOpen(false)}
// // //                   className="hover:text-[#facc15] transition-colors text-[15px]"
// // //                 >
// // //                   {item}
// // //                 </Link>
// // //               ))}
// // //               <Link
// // //                 href="/quote"
// // //                 onClick={() => setIsOpen(false)}
// // //                 className="mt-6 bg-[#facc15] text-[#0a0a0a] px-4 py-2 rounded-full text-center hover:bg-[#e5b900] transition-all"
// // //               >
// // //                 Book A Free Call
// // //               </Link>
// // //             </nav>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };
// // // export default Navbar;
// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { Menu, X } from "lucide-react";
// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [scrollY, setScrollY] = useState(0);
// // //   const navItems = [
// // //     "Home",
// // //     "About",
// // //     "Services",
// // //     "Portfolio",
// // //     "Experts",
// // //     "Blogs",
// // //     "Contact",
// // //     "Verify",
// // //   ];
// // //   // close on esc, click outside, and back-button
// // //   useEffect(() => {
// // //     const onKey = (e) => e.key === "Escape" && setIsOpen(false);
// // //     const onClick = (e) =>
// // //       e.target.id === "menu-overlay" && setIsOpen(false);
// // //     const onPop = () => setIsOpen(false);
// // //     window.addEventListener("keydown", onKey);
// // //     document.addEventListener("click", onClick);
// // //     window.addEventListener("popstate", onPop);
// // //     return () => {
// // //       window.removeEventListener("keydown", onKey);
// // //       document.removeEventListener("click", onClick);
// // //       window.removeEventListener("popstate", onPop);
// // //     };
// // //   }, []);
// // //   // push/pop for back-button
// // //   useEffect(() => {
// // //     if (isOpen) {
// // //       window.history.pushState({ navOpen: true }, "");
// // //       const onPop = () => setIsOpen(false);
// // //       window.addEventListener("popstate", onPop);
// // //       return () => window.removeEventListener("popstate", onPop);
// // //     }
// // //   }, [isOpen]);
// // //   // Detect scroll for navbar shadow
// // //   useEffect(() => {
// // //     const handleScroll = () => setScrollY(window.scrollY);
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);
// // //   return (
// // //     <>
// // //       <nav
// // //         className={`fixed left-0 w-full bg-[#f9fafb]/95 backdrop-blur-sm border-b border-gray-200 z-[50] transition-all duration-300 
// // //         ${scrollY > 200 ? "top-0 shadow-md" : "top-[var(--topbar-h)]"}`}
// // //       >
// // //         <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-10 py-3">
// // //           {/* Logo */}
// // //           <Link href="/" className="flex items-center gap-2">
// // //             <Image
// // //               src="/assets/images/logo.png"
// // //               alt="RevoticAi Logo"
// // //               width={120}
// // //               height={60}
// // //               priority
// // //             />
// // //             <span className="font-semibold text-lg text-[#0a0a0a]">
// // //               Revotic<span className="text-[#facc15]">Ai</span>
// // //             </span>
// // //           </Link>
// // //           {/* Desktop Menu */}
// // //           <div className="hidden md:flex items-center gap-8 font-medium text-[#0a0a0a]">
// // //             {navItems.map((item) => (
// // //               <Link
// // //                 key={item}
// // //                 href={`/${item === "Home" ? "" : item.toLowerCase()}`}
// // //                 className="relative text-sm group"
// // //               >
// // //                 {item}
// // //                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#facc15] transition-all duration-300 group-hover:w-full"></span>
// // //               </Link>
// // //             ))}
// // //             <Link
// // //               href="/quote"
// // //               className="ml-4 bg-[#facc15] text-[#0a0a0a] text-sm px-5 py-2 rounded-full hover:bg-[#e5b900] transition-all"
// // //             >
// // //               Book A Free Call
// // //             </Link>
// // //           </div>
// // //           {/* Mobile Menu Toggle */}
// // //           <button
// // //             className="md:hidden text-[#0a0a0a]"
// // //             onClick={() => setIsOpen((s) => !s)}
// // //             aria-label={isOpen ? "Close menu" : "Open menu"}
// // //           >
// // //             {isOpen ? <X size={26} /> : <Menu size={26} />}
// // //           </button>
// // //         </div>
// // //       </nav>
// // //       {/* Mobile Overlay */}
// // //       {isOpen && (
// // //         <div
// // //           id="menu-overlay"
// // //           className="fixed inset-0 bg-black/40 z-[70] flex md:hidden"
// // //           aria-hidden={!isOpen}
// // //         >
// // //           <div className="w-72 bg-[#f9fafb] h-full p-6 ml-auto relative animate-slide-in-right">
// // //             <button
// // //               onClick={() => setIsOpen(false)}
// // //               className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
// // //               aria-label="Close mobile menu"
// // //             >
// // //               <X size={26} />
// // //             </button>
// // //             <div className="flex items-center gap-2 mb-8 mt-2">
// // //               <Image
// // //                 src="/assets/images/logo.png"
// // //                 alt="RevoticAi Logo"
// // //                 width={40}
// // //                 height={40}
// // //               />
// // //               <span className="font-semibold text-lg text-[#0a0a0a]">
// // //                 Revotic<span className="text-[#facc15]">Ai</span>
// // //               </span>
// // //             </div>
// // //             <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10">
// // //               {navItems.map((item) => (
// // //                 <Link
// // //                   key={item}
// // //                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
// // //                   onClick={() => setIsOpen(false)}
// // //                   className="hover:text-[#facc15] transition-colors text-[15px]"
// // //                 >
// // //                   {item}
// // //                 </Link>
// // //               ))}
// // //               <Link
// // //                 href="/quote"
// // //                 onClick={() => setIsOpen(false)}
// // //                 className="mt-6 bg-[#facc15] text-[#0a0a0a] px-4 py-2 rounded-full text-center hover:bg-[#e5b900] transition-all"
// // //               >
// // //                 Book A Free Call
// // //               </Link>
// // //             </nav>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };
// // // export default Navbar;
// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { Menu, X } from "lucide-react";
// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [shadow, setShadow] = useState(false);
// //   const navItems = [
// //     "Home",
// //     "About",
// //     "Services",
// //     "Portfolio",
// //     "Experts",
// //     "Blogs",
// //     "Contact",
// //     "Verify",
// //   ];
// //   // Add shadow when scrolled
// //   useEffect(() => {
// //     const onScroll = () => setShadow(window.scrollY > 150);
// //     window.addEventListener("scroll", onScroll);
// //     return () => window.removeEventListener("scroll", onScroll);
// //   }, []);
// //   // Close on outside click or ESC key or back button
// //   useEffect(() => {
// //     if (!isOpen) return;
// //     const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
// //     const handleClickOutside = (e) => {
// //       if (e.target.id === "menu-overlay") setIsOpen(false);
// //     };
// //     const handlePopState = () => setIsOpen(false); // back button
// //     document.addEventListener("keydown", handleEsc);
// //     document.addEventListener("click", handleClickOutside);
// //     window.addEventListener("popstate", handlePopState);
// //     return () => {
// //       document.removeEventListener("keydown", handleEsc);
// //       document.removeEventListener("click", handleClickOutside);
// //       window.removeEventListener("popstate", handlePopState);
// //     };
// //   }, [isOpen]);
// //   return (
// //     <>
// //       {/* Main Navbar */}
// //       <nav
// //         className={`fixed w-full left-0 transition-all duration-300 z-[60] ${
// //           shadow ? "top-0 shadow-md" : "top-[56px]" // topbar height increased for mobile
// //         } bg-white`}
// //       >
// //         <div className="flex justify-between items-center px-6 md:px-10 py-3">
// //           {/* Logo */}
// //           <Link href="/" className="flex items-center gap-2">
// //             <Image
// //               src="/assets/images/logo.png"
// //               alt="RevoticAi Logo"
// //               width={120}
// //               height={50}
// //               priority
// //             />
// //           </Link>
// //           {/* Desktop Menu */}
// //           <div className="hidden md:flex items-center gap-6 text-[#0a0a0a] font-medium text-[16px]">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item}
// //                 href={`/${item === "Home" ? "" : item.toLowerCase()}`}
// //                 className="hover:text-[#facc15] transition"
// //               >
// //                 {item}
// //               </Link>
// //             ))}
// //             <Link
// //               href="/quote"
// //               className="bg-[#facc15] text-[#0a0a0a] px-5 py-2 rounded-full hover:bg-[#e5b900] transition"
// //             >
// //               Book A Free Call
// //             </Link>
// //           </div>
// //           {/* Mobile Menu Toggle */}
// //           <button
// //             className="md:hidden text-[#0a0a0a]"
// //             onClick={() => setIsOpen((s) => !s)}
// //             aria-label={isOpen ? "Close menu" : "Open menu"}
// //           >
// //             {isOpen ? <X size={26} /> : <Menu size={26} />}
// //           </button>
// //         </div>
// //       </nav>
// //       {/* Mobile Overlay */}
// //       {isOpen && (
// //         <div
// //           id="menu-overlay"
// //           className="fixed inset-0 bg-black/40 z-[70] flex md:hidden"
// //           aria-hidden={!isOpen}
// //         >
// //           <div className="w-72 bg-[#f9fafb] h-full p-6 ml-auto relative animate-slide-in-right">
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
// //               aria-label="Close mobile menu"
// //             >
// //               <X size={26} />
// //             </button>
// //             {/* Mobile Logo */}
// //             <div className="flex items-center gap-2 mb-8 mt-2">
// //               <Image
// //                 src="/assets/images/logo.png"
// //                 alt="RevoticAi Logo"
// //                 width={100}
// //                 height={100}
// //               />
// //             </div>
// //             {/* Navigation Links */}
// //             <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10 text-[15px]">
// //               {navItems.map((item) => (
// //                 <Link
// //                   key={item}
// //                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
// //                   onClick={() => setIsOpen(false)}
// //                   className="hover:text-[#facc15] transition-colors"
// //                 >
// //                   {item}
// //                 </Link>
// //               ))}
// //               <Link
// //                 href="/quote"
// //                 onClick={() => setIsOpen(false)}
// //                 className="mt-6 bg-[#facc15] text-[#0a0a0a] px-4 py-2 rounded-full text-center hover:bg-[#e5b900] transition-all"
// //               >
// //                 Book A Free Call
// //               </Link>
// //             </nav>
// //             {/* About Section in Drawer */}
// //             <div className="mt-10 border-t border-gray-300 pt-4 text-sm leading-6 text-[#0a0a0a]">
// //               <p className="font-semibold text-[14px] mb-2">About Revotic AI</p>
// //               <p className="text-[13px] text-gray-700">
// //                 Revotic AI is a future-driven tech company specializing in
// //                 intelligent automation, AI-powered platforms, and digital
// //                 solutions. We help startups and enterprises scale fast through
// //                 smart, data-driven technologies.
// //               </p>
// //               <Link
// //                 href="/about"
// //                 onClick={() => setIsOpen(false)}
// //                 className="block mt-2 text-[#facc15] text-[13px] hover:underline"
// //               >
// //                 Learn More →
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };
// // export default Navbar;
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navItems = [
//     "Home",
//     "About",
//     "Services",
//     "Portfolio",
//     "Experts",
//     "Blogs",
//     "Contact",
//     "Verify",
//   ];
//   // Detect scroll for shadow and shrink effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   // Close on ESC / outside click / back button
//   useEffect(() => {
//     if (!isOpen) return;
//     const handleEsc = (e) => e.key === "Escape" && setIsOpen(false);
//     const handleClickOutside = (e) => e.target.id === "menu-overlay" && setIsOpen(false);
//     const handlePopState = () => setIsOpen(false);
//     document.addEventListener("keydown", handleEsc);
//     document.addEventListener("click", handleClickOutside);
//     window.addEventListener("popstate", handlePopState);
//     return () => {
//       document.removeEventListener("keydown", handleEsc);
//       document.removeEventListener("click", handleClickOutside);
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, [isOpen]);
//   return (
//     <>
//       <nav
//         className={`fixed w-full left-0 bg-white transition-all duration-300 z-[60] ${
//           isScrolled ? "top-0 shadow-md py-2" : "top-[56px] py-4"
//         }`}
//       >
//         <div className="flex justify-between items-center px-6 md:px-10 transition-all duration-300">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/assets/images/logo.png"
//               alt="RevoticAi Logo"
//               width={isScrolled ? 100 : 120}
//               height={isScrolled ? 40 : 50}
//               priority
//               className="transition-all duration-300"
//             />
//           </Link>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6 text-[#0a0a0a] font-medium text-[16px]">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                 className="hover:text-[#facc15] transition"
//               >
//                 {item}
//               </Link>
//             ))}
//             <Link
//               href="/quote"
//               className="bg-[#facc15] text-[#0a0a0a] px-5 py-2 rounded-full hover:bg-[#e5b900] transition"
//             >
//               Book A Free Call
//             </Link>
//           </div>
//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden text-[#0a0a0a]"
//             onClick={() => setIsOpen((s) => !s)}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </nav>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           id="menu-overlay"
//           className="fixed inset-0 bg-black/40 z-[70] flex md:hidden"
//           aria-hidden={!isOpen}
//         >
//           <div className="w-72 bg-[#f9fafb] h-full p-6 ml-auto relative animate-slide-in-right">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
//               aria-label="Close mobile menu"
//             >
//               <X size={26} />
//             </button>
//             {/* Mobile Logo */}
//             <div className="flex items-center gap-2 mb-8 mt-2">
//               <Image
//                 src="/assets/images/logo.png"
//                 alt="RevoticAi Logo"
//                 width={100}
//                 height={100}
//               />
//             </div>
//             {/* Navigation Links */}
//             <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10 text-[15px]">
//               {navItems.map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="hover:text-[#facc15] transition-colors"
//                 >
//                   {item}
//                 </Link>
//               ))}
//               <Link
//                 href="/quote"
//                 onClick={() => setIsOpen(false)}
//                 className="mt-6 bg-[#facc15] text-[#0a0a0a] px-4 py-2 rounded-full text-center hover:bg-[#e5b900] transition-all"
//               >
//                 Book A Free Call
//               </Link>
//             </nav>
//             {/* About Section */}
//             <div className="mt-10 border-t border-gray-300 pt-4 text-sm leading-6 text-[#0a0a0a]">
//               <p className="font-semibold text-[14px] mb-2">About Revotic AI</p>
//               <p className="text-[13px] text-gray-700">
//                 Revotic AI is a future-driven tech company specializing in
//                 intelligent automation, AI-powered platforms, and digital
//                 solutions. We help startups and enterprises scale fast through
//                 smart, data-driven technologies.
//               </p>
//               <Link
//                 href="/about"
//                 onClick={() => setIsOpen(false)}
//                 className="block mt-2 text-[#facc15] text-[13px] hover:underline"
//               >
//                 Learn More →
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Navbar;
}),
"[project]/revoticai/src/components/common/Topbar.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/revoticai/src/components/common/Topbar.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/revoticai/src/components/common/Topbar.jsx <module evaluation>", "default");
}),
"[project]/revoticai/src/components/common/Topbar.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/revoticai/src/components/common/Topbar.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/revoticai/src/components/common/Topbar.jsx", "default");
}),
"[project]/revoticai/src/components/common/Topbar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Topbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/revoticai/src/components/common/Topbar.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Topbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/revoticai/src/components/common/Topbar.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Topbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/revoticai/src/app/layout.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/src/components/common/Navbar.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Topbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/src/components/common/Topbar.jsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "RevoticAi",
    description: "AI-driven software development and automation solutions"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("body", {
            className: "bg-white text-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Topbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("main", {
                    className: "pt-[120px]",
                    children: children
                })
            ]
        })
    });
}
}),
];

//# sourceMappingURL=revoticai_src_0eb5b602._.js.map