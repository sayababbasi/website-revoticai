module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/revoticai/src/components/common/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [shadow, setShadow] = useState(false);
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
//   useEffect(() => {
//     const onScroll = () => setShadow(window.scrollY > 150);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <>
//       {/* Main Navbar */}
//       <nav
//         className={`fixed w-full left-0 transition-all duration-300 z-[60] ${
//           shadow ? "top-0 shadow-md" : "top-[40px]"
//         } bg-white`}
//       >
//         <div className="flex justify-between items-center px-6 md:px-10 py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/assets/images/logo.png"
//               alt="RevoticAi Logo"
//               width={120}
//               height={50}
//               priority
//             />
//           </Link>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-6 text-[#0a0a0a] font-medium">
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
//             <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10">
//               {navItems.map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="hover:text-[#facc15] transition-colors text-[15px]"
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
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Navbar;
// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
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
//   // close on esc, click outside, and back-button
//   useEffect(() => {
//     const onKey = (e) => e.key === "Escape" && setIsOpen(false);
//     const onClick = (e) =>
//       e.target.id === "menu-overlay" && setIsOpen(false);
//     const onPop = () => setIsOpen(false);
//     window.addEventListener("keydown", onKey);
//     document.addEventListener("click", onClick);
//     window.addEventListener("popstate", onPop);
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.removeEventListener("click", onClick);
//       window.removeEventListener("popstate", onPop);
//     };
//   }, []);
//   // push/pop for back-button
//   useEffect(() => {
//     if (isOpen) {
//       window.history.pushState({ navOpen: true }, "");
//       const onPop = () => setIsOpen(false);
//       window.addEventListener("popstate", onPop);
//       return () => window.removeEventListener("popstate", onPop);
//     }
//   }, [isOpen]);
//   // Detect scroll for navbar shadow
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <>
//       <nav
//         className={`fixed left-0 w-full bg-[#f9fafb]/95 backdrop-blur-sm border-b border-gray-200 z-[50] transition-all duration-300 
//         ${scrollY > 200 ? "top-0 shadow-md" : "top-[var(--topbar-h)]"}`}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-10 py-3">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/assets/images/logo.png"
//               alt="RevoticAi Logo"
//               width={120}
//               height={60}
//               priority
//             />
//             <span className="font-semibold text-lg text-[#0a0a0a]">
//               Revotic<span className="text-[#facc15]">Ai</span>
//             </span>
//           </Link>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8 font-medium text-[#0a0a0a]">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                 className="relative text-sm group"
//               >
//                 {item}
//                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#facc15] transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//             <Link
//               href="/quote"
//               className="ml-4 bg-[#facc15] text-[#0a0a0a] text-sm px-5 py-2 rounded-full hover:bg-[#e5b900] transition-all"
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
//             <div className="flex items-center gap-2 mb-8 mt-2">
//               <Image
//                 src="/assets/images/logo.png"
//                 alt="RevoticAi Logo"
//                 width={40}
//                 height={40}
//               />
//               <span className="font-semibold text-lg text-[#0a0a0a]">
//                 Revotic<span className="text-[#facc15]">Ai</span>
//               </span>
//             </div>
//             <nav className="flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10">
//               {navItems.map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="hover:text-[#facc15] transition-colors text-[15px]"
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
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Navbar;
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shadow, setShadow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        "Home",
        "About",
        "Services",
        "Portfolio",
        "Experts",
        "Blogs",
        "Contact",
        "Verify"
    ];
    // Add shadow when scrolled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setShadow(window.scrollY > 150);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    // Close on outside click or ESC key or back button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleEsc = (e)=>e.key === "Escape" && setIsOpen(false);
        const handleClickOutside = (e)=>{
            if (e.target.id === "menu-overlay") setIsOpen(false);
        };
        const handlePopState = ()=>setIsOpen(false); // back button
        document.addEventListener("keydown", handleEsc);
        document.addEventListener("click", handleClickOutside);
        window.addEventListener("popstate", handlePopState);
        return ()=>{
            document.removeEventListener("keydown", handleEsc);
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("popstate", handlePopState);
        };
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("nav", {
                className: `fixed w-full left-0 transition-all duration-300 z-[60] ${shadow ? "top-0 shadow-md" : "top-[56px]" // topbar height increased for mobile
                } bg-white`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "flex justify-between items-center px-6 md:px-10 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/logo.png",
                                alt: "RevoticAi Logo",
                                width: 120,
                                height: 50,
                                priority: true
                            })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "hidden md:flex items-center gap-6 text-[#0a0a0a] font-medium text-[16px]",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${item === "Home" ? "" : item.toLowerCase()}`,
                                        className: "hover:text-[#facc15] transition",
                                        children: item
                                    }, item)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/quote",
                                    className: "bg-[#facc15] text-[#0a0a0a] px-5 py-2 rounded-full hover:bg-[#e5b900] transition",
                                    children: "Book A Free Call"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            className: "md:hidden text-[#0a0a0a]",
                            onClick: ()=>setIsOpen((s)=>!s),
                            "aria-label": isOpen ? "Close menu" : "Open menu",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 26
                            }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 26
                            })
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                id: "menu-overlay",
                className: "fixed inset-0 bg-black/40 z-[70] flex md:hidden",
                "aria-hidden": !isOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "w-72 bg-[#f9fafb] h-full p-6 ml-auto relative animate-slide-in-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            onClick: ()=>setIsOpen(false),
                            className: "absolute top-5 right-5 text-gray-500 hover:text-black transition",
                            "aria-label": "Close mobile menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 26
                            })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "flex items-center gap-2 mb-8 mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/logo.png",
                                alt: "RevoticAi Logo",
                                width: 100,
                                height: 100
                            })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
                            className: "flex flex-col gap-5 font-medium text-[#0a0a0a] mt-10 text-[15px]",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${item === "Home" ? "" : item.toLowerCase()}`,
                                        onClick: ()=>setIsOpen(false),
                                        className: "hover:text-[#facc15] transition-colors",
                                        children: item
                                    }, item)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/quote",
                                    onClick: ()=>setIsOpen(false),
                                    className: "mt-6 bg-[#facc15] text-[#0a0a0a] px-4 py-2 rounded-full text-center hover:bg-[#e5b900] transition-all",
                                    children: "Book A Free Call"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "mt-10 border-t border-gray-300 pt-4 text-sm leading-6 text-[#0a0a0a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                    className: "font-semibold text-[14px] mb-2",
                                    children: "About Revotic AI"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                    className: "text-[13px] text-gray-700",
                                    children: "Revotic AI is a future-driven tech company specializing in intelligent automation, AI-powered platforms, and digital solutions. We help startups and enterprises scale fast through smart, data-driven technologies."
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    onClick: ()=>setIsOpen(false),
                                    className: "block mt-2 text-[#facc15] text-[13px] hover:underline",
                                    children: "Learn More →"
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
"[project]/revoticai/src/components/common/Topbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
"use client";
;
;
;
;
const Topbar = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: "fixed top-0 left-0 w-full bg-[#0a0a0a] text-[#f9fafb] text-sm py-2 md:py-3 px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 border-b border-[#facc15]/20 z-[60]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex justify-center md:justify-start items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        size: 14,
                        className: "text-[#facc15]"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: "text-[13px] md:text-[14px] font-medium",
                        children: "Spring Valley, Bani Gala, Islamabad"
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex justify-center items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://facebook.com",
                        target: "_blank",
                        className: "hover:text-[#facc15] transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                            size: 15
                        })
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://instagram.com",
                        target: "_blank",
                        className: "hover:text-[#facc15] transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                            size: 15
                        })
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "https://linkedin.com",
                        target: "_blank",
                        className: "hover:text-[#facc15] transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                            size: 15
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex justify-center md:justify-end items-center flex-wrap gap-2 text-[13px] md:text-[14px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                        href: "mailto:contact.revoticai@gmail.com",
                        className: "hover:text-[#facc15] transition",
                        children: "contact.revoticai@gmail.com"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: "hidden md:inline text-gray-400",
                        children: "|"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                        href: "tel:+923160513841",
                        className: "hover:text-[#facc15] transition",
                        children: "+92 316 0513841"
                    })
                ]
            })
        ]
    });
};
const __TURBOPACK__default__export__ = Topbar;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c445270._.js.map