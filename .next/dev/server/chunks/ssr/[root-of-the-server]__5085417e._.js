module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__5085417e._.js.map