// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const links = [
//   { label: "Home", to: "/" },
//   { label: "Projects", to: "/projects" },
//   // { label: "Gallery", to: "/gallery" },
//   { label: "Skills", to: "/skills" },
//   { label: "Certificates", to: "/certificates" },
//   { label: "Blog", to: "/blog" },
//   { label: "Resume", to: "/resume" },
//   { label: "About Me", to: "/about" },
//   { label: "Contact", to: "/contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const navRef = useRef(null);
//   const linksRef = useRef(null);

//   // Detect overflow → show hamburger
//   const checkOverflow = () => {
//     if (!navRef.current || !linksRef.current) return;
//     setShowButton(
//       linksRef.current.scrollWidth > navRef.current.offsetWidth
//     );
//   };

//   useEffect(() => {
//     checkOverflow();
//     window.addEventListener("resize", checkOverflow);
//     return () => window.removeEventListener("resize", checkOverflow);
//   }, []);

//   // 🔒 Lock background scroll on mobile menu open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   return (
//     <>
//       {/* ===== Navbar ===== */}
//       <nav
//         ref={navRef}
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 100,
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "1rem 2rem",
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//           background: "rgba(0,0,0,0.6)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         {/* Logo */}
//         <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             style={{
//               fontWeight: "bold",
//               fontSize: "1.4rem",
//               color: "var(--accent)",
//             }}
//           >
//             SG
//           </motion.div>
//           <div>
//             <h1 style={{ margin: 0, fontSize: 14 }}>Sarthak Gupta</h1>
//             <div style={{ fontSize: 12, color: "var(--muted)" }}>
//   AI Enthusiast • Analytical Thinker • Problem Solver
// </div>
//           </div>
//         </div>

//         {/* Desktop Links */}
//         <div
//           ref={linksRef}
//           style={{
//             display: showButton ? "none" : "flex",
//             gap: "2rem",
//             alignItems: "center",
//             flexGrow: 1,
//             justifyContent: "center",
//           }}
//         >
//           {links.map((l) => (
//             <NavLink
//               key={l.to}
//               to={l.to}
//               end
//               style={{ textDecoration: "none" }}
//             >
//               {({ isActive }) => (
//                 <motion.div
//                   whileHover={{
//                     scale: 1.1,
//                     color: "var(--accent)",
//                     textShadow: "0 0 8px var(--accent)",
//                   }}
//                   style={{
//                     color: isActive ? "var(--accent)" : "#fff",
//                     fontSize: "0.95rem",
//                     fontWeight: 500,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   {l.label}
//                   {isActive && (
//                     <motion.div
//                       layoutId="underline"
//                       style={{
//                         width: "70%",
//                         height: "2px",
//                         marginTop: "4px",
//                         background: "var(--accent)",
//                         boxShadow: "0 0 6px var(--accent)",
//                       }}
//                     />
//                   )}
//                 </motion.div>
//               )}
//             </NavLink>
//           ))}
//         </div>

//         {/* Hamburger */}
//         {showButton && (
//           <button
//             onClick={() => setIsOpen(true)}
//             style={{
//               background: "none",
//               border: "none",
//               fontSize: "1.8rem",
//               color: "#fff",
//               cursor: "pointer",
//             }}
//           >
//             ☰
//           </button>
//         )}
//       </nav>

//       {/* ===== Mobile Menu ===== */}
//       <AnimatePresence>
//         {isOpen && showButton && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             style={{
//               position: "fixed",
//               inset: 0,
//               height: "100dvh",
//               background: "rgba(0,0,0,0.95)",
//               backdropFilter: "blur(12px)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               paddingTop: "4rem",
//               overflowY: "auto",
//               overscrollBehavior: "contain",
//               zIndex: 9999,
//             }}
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               style={{
//                 position: "absolute",
//                 top: "1rem",
//                 right: "1rem",
//                 background: "none",
//                 border: "none",
//                 fontSize: "2rem",
//                 color: "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               ✕
//             </button>

//             {links.map((l) => (
//               <NavLink
//                 key={l.to}
//                 to={l.to}
//                 onClick={() => setIsOpen(false)}
//                 style={({ isActive }) => ({
//                   color: isActive ? "var(--accent)" : "#fff",
//                   textDecoration: "none",
//                   padding: "1rem 0",
//                   width: "100%",
//                   textAlign: "center",
//                   fontSize: 16,
//                   borderBottom: "1px solid rgba(255,255,255,0.05)",
//                 })}
//               >
//                 {l.label}
//               </NavLink>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  // ✅ Detect screen size (NOT scroll / overflow)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ===== Navbar ===== */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.9rem 1.6rem",
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* ===== Brand ===== */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(90deg,var(--accent),var(--accent-2))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#fff",
            }}
          >
            SG
          </motion.div>
          <div>
            <h1 style={{ margin: 0, fontSize: 14 }}>Sarthak Gupta</h1>
            <div style={{ fontSize: 11, color: "var(--muted)" }}>
              AI Enthusiast • Analytical Thinker • Problem Solver
            </div>
          </div>
        </div>

        {/* ===== Desktop Links ===== */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "1.8rem",
              alignItems: "center",
            }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                style={{ textDecoration: "none" }}
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      color: isActive ? "var(--accent)" : "#fff",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      position: "relative",
                       padding: "4px 6px",
                    }}
                  >
                    {l.label}
                    {isActive && (
  <motion.div
    layoutId="underline"
    style={{
      position: "absolute",
      bottom: -6,
      left: 0,
      width: "100%",
      height: "2px",
      background: "var(--accent)",
      boxShadow: "0 0 8px var(--accent)",
      borderRadius: "2px",
    }}
  />
)}

                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>
        )}

        {/* ===== Hamburger ===== */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(14px)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "2rem",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--accent)" : "#fff",
                  textDecoration: "none",
                  padding: "1rem 0",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 16,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                })}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
