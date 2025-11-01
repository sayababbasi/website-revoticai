(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/revoticai/src/components/common/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Close menu on Escape or outside click
//   useEffect(() => {
//     const handleKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
//     const handleClickOutside = (e) => {
//       if (e.target.id === "menu-overlay") setIsOpen(false);
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);
//   const closeMenu = () => setIsOpen(false);
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
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md border-b border-gray-100 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/assets/images/logo.png"
//             alt="RevoticAi Logo"
//             width={150}
//             height={100}
//             className="rounded-md"
//           />
//         </Link>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 font-medium text-gray-900">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//               className="relative text-sm group transition-colors"
//             >
//               {item}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//           <Link
//             href="/quote"
//             className="ml-4 bg-primary text-white text-sm px-5 py-2 rounded-full shadow hover:bg-[#333] transition-all"
//           >
//             Book A Free Call
//           </Link>
//         </div>
//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-primary focus:outline-none"
//           onClick={() => setIsOpen(true)}
//         >
//           <Menu size={28} />
//         </button>
//       </div>
//       {/* Mobile Drawer */}
//       {isOpen && (
//         <div
//           id="menu-overlay"
//           className="fixed inset-0 bg-black/40 z-40 flex md:hidden"
//         >
//           <div className="w-64 bg-white h-full p-6 shadow-lg ml-auto animate-slide-in-right relative">
//             <button
//               onClick={closeMenu}
//               className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
//             >
//               <X size={24} />
//             </button>
//             {/* Mobile Logo */}
//             <div className="flex items-center gap-2 mb-8 mt-2">
//               <Image
//                 src="/assets/images/logo.png"
//                 alt="RevoticAi Logo"
//                 width={40}
//                 height={40}
//                 className="rounded-md"
//               />
//             </div>
//             {/* Mobile Nav Links */}
//             <nav className="flex flex-col gap-5 font-medium text-gray-700">
//               {navItems.map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                   onClick={closeMenu}
//                   className="hover:text-primary transition-colors"
//                 >
//                   {item}
//                 </Link>
//               ))}
//               <Link
//                 href="/quote"
//                 onClick={closeMenu}
//                 className="mt-4 bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-blue-700 transition-all"
//               >
//                 Book A Free Call
//               </Link>
//             </nav>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/revoticai/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/revoticai/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Close menu on ESC, outside click, or back button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleKeyDown = {
                "Navbar.useEffect.handleKeyDown": (e)=>e.key === "Escape" && setIsOpen(false)
            }["Navbar.useEffect.handleKeyDown"];
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (e)=>{
                    if (e.target.id === "menu-overlay") setIsOpen(false);
                }
            }["Navbar.useEffect.handleClickOutside"];
            const handlePopState = {
                "Navbar.useEffect.handlePopState": ()=>setIsOpen(false)
            }["Navbar.useEffect.handlePopState"];
            window.addEventListener("keydown", handleKeyDown);
            document.addEventListener("click", handleClickOutside);
            window.addEventListener("popstate", handlePopState);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    document.removeEventListener("click", handleClickOutside);
                    window.removeEventListener("popstate", handlePopState);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const toggleMenu = ()=>{
        if (!isOpen) window.history.pushState({
            menu: true
        }, "");
        else window.history.back();
        setIsOpen(!isOpen);
    };
    const closeMenu = ()=>{
        if (isOpen) window.history.back();
        setIsOpen(false);
    };
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
        className: "fixed top-[40px] left-0 w-full bg-bg-light/90 backdrop-blur-md border-b border-gray-200 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/logo.png",
                                alt: "RevoticAi Logo",
                                width: 130,
                                height: 90,
                                className: "rounded-md"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: "font-semibold text-lg text-text-heading",
                                children: "RevoticAi"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: "hidden md:flex items-center gap-8 font-medium text-text-heading",
                        children: [
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${item === "Home" ? "" : item.toLowerCase()}`,
                                    className: "relative text-sm group transition-colors",
                                    children: [
                                        item,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            className: "absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
                                        })
                                    ]
                                }, item)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/quote",
                                className: "ml-4 bg-primary text-black text-sm px-5 py-2 rounded-full hover:bg-primary-hover transition-all",
                                children: "Book A Free Call"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        className: "md:hidden text-text-heading focus:outline-none",
                        onClick: toggleMenu,
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 26
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 26
                        })
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                id: "menu-overlay",
                className: "fixed inset-0 bg-black/40 z-40 flex md:hidden transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "w-72 bg-bg-light/95 backdrop-blur-md h-full p-6 ml-auto relative animate-slide-in-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            onClick: closeMenu,
                            className: "absolute top-5 right-5 text-text-body hover:text-text-heading transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 26
                            })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "flex items-center gap-2 mb-8 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/images/logo.png",
                                    alt: "RevoticAi Logo",
                                    width: 40,
                                    height: 40,
                                    className: "rounded-md"
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                    className: "font-semibold text-lg text-text-heading",
                                    children: "RevoticAi"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
                            className: "flex flex-col gap-5 font-medium text-text-heading",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${item === "Home" ? "" : item.toLowerCase()}`,
                                        onClick: closeMenu,
                                        className: "hover:text-primary transition-colors text-[15px]",
                                        children: item
                                    }, item)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$revoticai$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/quote",
                                    onClick: closeMenu,
                                    className: "mt-6 bg-primary text-black px-4 py-2 rounded-full text-center hover:bg-primary-hover transition-all",
                                    children: "Book A Free Call"
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
]);

//# sourceMappingURL=revoticai_src_components_common_Navbar_jsx_321de0da._.js.map