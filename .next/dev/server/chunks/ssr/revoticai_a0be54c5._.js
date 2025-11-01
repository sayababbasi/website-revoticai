module.exports = [
"[project]/revoticai/src/components/common/Navbar.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { useState } from "react";
// import logo from "../../assets/images/logo.jpg";
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-3">
//           <a href="#"><img
//             src={logo}
//             alt="Bangash Containers Logo"
//             className="h-15 w-24 object-contain rounded"
//           />
//             <h1 className="text-2xl font-bold text-blue-700">
//               {/* Bangash Containers */}
//             </h1>
//           </a>
//         </div>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Home
//           </a>
//           {/* Services Dropdown */}
//           <div className="relative group">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="text-gray-700 hover:text-blue-700 flex items-center"
//             >
//               Services ▾
//             </button>
//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2">
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Prefabricated Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Fabricated Office
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Container Carvan
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Container Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Container Offices
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                     Security Cabins
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Projects
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Blogs
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             About
//           </a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">
//             Contact
//           </a>
//           <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
//             Get Quote
//           </button>
//         </div>
//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-blue-700 text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md py-3 text-center space-y-2">
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             Home
//           </a>
//           {/* Services Dropdown (mobile) */}
//           <div>
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="w-full text-gray-700 hover:text-blue-700 flex justify-center items-center"
//             >
//               Services {isServicesOpen ? "▲" : "▼"}
//             </button>
//             {isServicesOpen && (
//               <ul className="mt-2 space-y-1">
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Prefabricated Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Fabricated Office
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Container Carvan
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Container Homes
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Container Offices
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-blue-700">
//                     Security Cabins
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             Projects
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             About
//           </a>
//           <a href="#" className="block text-gray-700 hover:text-blue-700">
//             Contact
//           </a>
//           <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900">
//             Get Quote
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
// // import React, { useState, useEffect } from "react";
// // import { Menu, X } from "lucide-react";
// // import logo from "../../assets/images/logo.jpg";
// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   // Close menu when clicking outside or pressing back button
// //   useEffect(() => {
// //     const handlePopState = () => setMenuOpen(false);
// //     window.addEventListener("popstate", handlePopState);
// //     // Close when clicking on overlay area
// //     const handleClickOutside = (e) => {
// //       if (e.target.id === "menu-overlay") setMenuOpen(false);
// //     };
// //     document.addEventListener("click", handleClickOutside);
// //     return () => {
// //       window.removeEventListener("popstate", handlePopState);
// //       document.removeEventListener("click", handleClickOutside);
// //     };
// //   }, []);
// //   const handleLinkClick = () => {
// //     setMenuOpen(false);
// //   };
// //   return (
// //     <header className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
// //         {/* Logo */}
// //         <a href="/" className="flex items-center space-x-2">
// //           <img src={logo} alt="Bangash Containers" className="h-10 w-auto" />
// //           <span className="text-lg font-semibold text-gray-800">
// //             Bangash Containers
// //           </span>
// //         </a>
// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
// //           {["Home", "About", "Products", "Contact"].map((item) => (
// //             <a
// //               key={item}
// //               href={`#${item.toLowerCase()}`}
// //               className="hover:text-yellow-600 transition"
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </nav>
// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden p-2 text-gray-700"
// //           onClick={() => setMenuOpen(true)}
// //         >
// //           <Menu size={24} />
// //         </button>
// //       </div>
// //       {/* Mobile Menu Overlay */}
// //       {menuOpen && (
// //         <div
// //           id="menu-overlay"
// //           className="fixed inset-0 bg-black bg-opacity-40 z-40 flex"
// //         >
// //           {/* Side Drawer */}
// //           <div className="w-64 bg-white h-full p-5 relative shadow-xl animate-slide-in-left">
// //             <button
// //               onClick={() => setMenuOpen(false)}
// //               className="absolute top-4 right-4 text-gray-600 hover:text-black"
// //             >
// //               <X size={24} />
// //             </button>
// //             <nav className="mt-12 flex flex-col space-y-6 font-medium text-gray-800">
// //               {["Home", "About", "Products", "Contact"].map((item) => (
// //                 <a
// //                   key={item}
// //                   href={`#${item.toLowerCase()}`}
// //                   onClick={handleLinkClick}
// //                   className="hover:text-yellow-600 transition"
// //                 >
// //                   {item}
// //                 </a>
// //               ))}
// //             </nav>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };
// // export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../../assets/images/logo.jpg";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   // Handle ESC key + Back button + Click outside to close menu
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") setIsOpen(false);
//     };
//     const handlePopState = () => setIsOpen(false);
//     const handleClickOutside = (e) => {
//       if (e.target.id === "menu-overlay") setIsOpen(false);
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("popstate", handlePopState);
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("popstate", handlePopState);
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);
//   const closeMenu = () => setIsOpen(false);
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       {/* Navbar main row */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <a href="/" className="flex items-center space-x-3">
//           <img
//             src={logo}
//             alt="Bangash Containers Logo"
//             className="h-14 w-auto object-contain rounded"
//           / >
//         </a>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="/" className="text-gray-700 hover:text-blue-700">Home</a>
//           {/* Dropdown for Services */}
//           <div className="relative group">
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="text-gray-700 hover:text-blue-700 flex items-center"
//             >
//               Services ▾
//             </button>
//             {isServicesOpen && (
//               <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2 z-50">
//                 {[
//                   "Prefabricated Homes",
//                   "Fabricated Office",
//                   "Container Caravan",
//                   "Container Homes",
//                   "Container Offices",
//                   "Security Cabins",
//                 ].map((service) => (
//                   <li key={service}>
//                     <a
//                       href=""
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {service}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <a href="#" className="text-gray-700 hover:text-blue-700">Projects</a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">Blogs</a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">About</a>
//           <a href="#" className="text-gray-700 hover:text-blue-700">Contact</a>
//           <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
//             Get Quote
//           </button>
//         </div>
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-blue-700 text-2xl focus:outline-none"
//           onClick={() => setIsOpen(true)}
//         >
//           <Menu size={26} />
//         </button>
//       </div>
//       {/* Mobile Side Drawer */}
//       {isOpen && (
//         <div
//           id="menu-overlay"
//           className="fixed inset-0 bg-black bg-opacity-40 z-40 flex"
//         >
//           <div className="w-64 bg-white h-full p-5 relative shadow-xl animate-slide-in-right ml-auto">
//             {/* Close (Cross) Button */}
//             <button
//               onClick={closeMenu}
//               className="absolute top-4 right-4 text-gray-600 hover:text-black"
//             >
//               <X size={24} />
//             </button>
//             {/* Logo */}
//             <div className="flex items-center space-x-3 mb-6">
//               <img
//                 src={logo}
//                 alt="Bangash Containers Logo"
//                 className="h-10 w-auto object-contain rounded"
//               />
//             </div>
//             {/* Navigation Links */}
//             <nav className="flex flex-col space-y-4 text-gray-800 font-medium">
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Home
//               </a>
//               {/* Mobile Dropdown */}
//               <div>
//                 <button
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className="flex justify-between items-center w-full hover:text-blue-700"
//                 >
//                   <span>Services</span>
//                   <span>{isServicesOpen ? "▲" : "▼"}</span>
//                 </button>
//                 {isServicesOpen && (
//                   <ul className="ml-4 mt-2 space-y-1">
//                     {[
//                       "Prefabricated Homes",
//                       "Fabricated Office",
//                       "Container Caravan",
//                       "Container Homes",
//                       "Container Offices",
//                       "Security Cabins",
//                     ].map((service) => (
//                       <li key={service}>
//                         <a
//                           href="#"
//                           onClick={closeMenu}
//                           className="block hover:text-blue-700"
//                         >
//                           {service}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Projects
//               </a>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Blogs
//               </a>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 About
//               </a>
//               <a href="#" onClick={closeMenu} className="hover:text-blue-700">
//                 Contact
//               </a>
//               <button
//                 onClick={closeMenu}
//                 className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 mt-4"
//               >
//                 Get Quote
//               </button>
//             </nav>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };
// export default Navbar;
// src/components/common/Navbar.jsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-router-dom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/menu.js [app-rsc] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript) <export default as X>");
(()=>{
    const e = new Error("Cannot find module '../../assets/images/logo.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServicesOpen, setIsServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle ESC key + Back button + Click outside to close menu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") setIsOpen(false);
        };
        const handlePopState = ()=>setIsOpen(false);
        const handleClickOutside = (e)=>{
            if (e.target.id === "menu-overlay") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("popstate", handlePopState);
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("popstate", handlePopState);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const closeMenu = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
        className: "bg-white shadow-md sticky top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                        to: "/",
                        className: "flex items-center space-x-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("img", {
                            src: logo,
                            alt: "Bangash Containers Logo",
                            className: "h-14 w-auto object-contain rounded"
                        })
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "hidden md:flex space-x-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                to: "/",
                                className: ({ isActive })=>`text-gray-700 hover:text-blue-700 ${isActive ? "text-blue-700 font-semibold" : ""}`,
                                children: "Home"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                        onClick: ()=>setIsServicesOpen(!isServicesOpen),
                                        className: "text-gray-700 hover:text-blue-700 flex items-center",
                                        children: "Services ▾"
                                    }),
                                    isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                                        className: "absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md text-gray-700 py-2 z-50",
                                        children: [
                                            {
                                                name: "Prefabricated Homes",
                                                path: "/services/prefabricated-homes"
                                            },
                                            {
                                                name: "Prefabricated Office",
                                                path: "/services/fabricated-office"
                                            },
                                            {
                                                name: "Container Caravan",
                                                path: "/services/container-caravan"
                                            },
                                            {
                                                name: "Container Homes",
                                                path: "/services/container-homes"
                                            },
                                            {
                                                name: "Container Offices",
                                                path: "/services/container-offices"
                                            },
                                            {
                                                name: "Security Cabins",
                                                path: "/services/security-cabins"
                                            }
                                        ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                                    to: service.path,
                                                    onClick: ()=>setIsServicesOpen(false),
                                                    className: ({ isActive })=>`block px-4 py-2 transition-colors ${isActive ? "bg-blue-50 text-blue-700 font-medium" : "hover:bg-gray-100"}`,
                                                    children: service.name
                                                })
                                            }, service.name))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                to: "/projects",
                                className: ({ isActive })=>`text-gray-700 hover:text-blue-700 ${isActive ? "text-blue-700 font-semibold" : ""}`,
                                children: "Projects"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                to: "/blogs",
                                className: ({ isActive })=>`text-gray-700 hover:text-blue-700 ${isActive ? "text-blue-700 font-semibold" : ""}`,
                                children: "Blogs"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                to: "/about",
                                className: ({ isActive })=>`text-gray-700 hover:text-blue-700 ${isActive ? "text-blue-700 font-semibold" : ""}`,
                                children: "About"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                to: "/contact",
                                className: ({ isActive })=>`text-gray-700 hover:text-blue-700 ${isActive ? "text-blue-700 font-semibold" : ""}`,
                                children: "Contact"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                to: "/quote",
                                className: "bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition",
                                children: "Get Quote"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        className: "md:hidden text-blue-700 text-2xl focus:outline-none",
                        onClick: ()=>setIsOpen(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 26
                        })
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                id: "menu-overlay",
                className: "fixed inset-0 bg-black bg-opacity-40 z-40 flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "w-64 bg-white h-full p-5 relative shadow-xl animate-slide-in-right ml-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            onClick: closeMenu,
                            className: "absolute top-4 right-4 text-gray-600 hover:text-black",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "flex items-center space-x-3 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("img", {
                                src: logo,
                                alt: "Bangash Containers Logo",
                                className: "h-10 w-auto object-contain rounded"
                            })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
                            className: "flex flex-col space-y-4 text-gray-800 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                    to: "/",
                                    onClick: closeMenu,
                                    className: "hover:text-blue-700",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                            onClick: ()=>setIsServicesOpen(!isServicesOpen),
                                            className: "flex justify-between items-center w-full hover:text-blue-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                    children: "Services"
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                    children: isServicesOpen ? "▲" : "▼"
                                                })
                                            ]
                                        }),
                                        isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                                            className: "ml-4 mt-2 space-y-1",
                                            children: [
                                                "Prefabricated Homes",
                                                "Fabricated Office",
                                                "Container Caravan",
                                                "Container Homes",
                                                "Container Offices",
                                                "Security Cabins"
                                            ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                                        to: "/products",
                                                        onClick: closeMenu,
                                                        className: "block hover:text-blue-700",
                                                        children: service
                                                    })
                                                }, service))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                    to: "/projects",
                                    onClick: closeMenu,
                                    className: "hover:text-blue-700",
                                    children: "Projects"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                    to: "/blogs",
                                    onClick: closeMenu,
                                    className: "hover:text-blue-700",
                                    children: "Blogs"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                    to: "/about",
                                    onClick: closeMenu,
                                    className: "hover:text-blue-700",
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                    to: "/contact",
                                    onClick: closeMenu,
                                    className: "hover:text-blue-700",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NavLink, {
                                    to: "/quote",
                                    onClick: closeMenu,
                                    className: "bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 mt-4 text-center",
                                    children: "Get Quote"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const __TURBOPACK__default__export__ = Navbar;
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
;
;
;
const metadata = {
    title: "RevoticAi",
    description: "Next-generation AI & Automation Solutions"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$src$2f$components$2f$common$2f$Navbar$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("main", {
                    style: {
                        paddingTop: "100px"
                    },
                    children: children
                })
            ]
        })
    });
}
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/icons/menu.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M4 5h16",
            key: "1tepv9"
        }
    ],
    [
        "path",
        {
            d: "M4 12h16",
            key: "1lakjw"
        }
    ],
    [
        "path",
        {
            d: "M4 19h16",
            key: "1djgab"
        }
    ]
];
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("menu", __iconNode);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/icons/menu.js [app-rsc] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/menu.js [app-rsc] (ecmascript)");
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("x", __iconNode);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/revoticai/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=revoticai_a0be54c5._.js.map