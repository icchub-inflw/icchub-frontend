// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Hamburger } from "@/icons/hamburger";

// interface NavbarProps {
//   children?: React.ReactNode;
// }

// export default function Navbar({ children }: NavbarProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   console.log("pathname", pathname);

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 600) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50"> */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 justify-between items-center p-4 fixed top-0 left-0 right-0 z-50 ${
//           scrolled ? "bg-blue-100 shadow-md" : "bg-white shadow-md"
//         }`}
//       >
//         <div className="container max-w-[100vw] mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <Link href={"/"} className="flex items-center gap-2">
//             <div
//               className={`p-4 rounded-full text-lg font-bold ${
//                 scrolled ? "bg-white" : "bg-blue-100"
//               }`}
//             >
//               flw
//             </div>
//             <span className="text-2xl font-semibold">ICCHub.ai</span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex gap-6 text-lg">
//             <Link
//               href="/"
//               className={`hover:text-blue-500 relative ${
//                 pathname === "/" ? "border-b-2 border-blue-500" : ""
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/how-it-works"
//               className={`hover:text-blue-500 ${
//                 pathname === "/how-it-works" ? "border-b-2 border-blue-500" : ""
//               }`}
//             >
//               How it Works
//             </Link>
//             <Link
//               href="/faq"
//               className={`hover:text-blue-500 ${
//                 pathname === "/faq" ? "border-b-2 border-blue-500" : ""
//               }`}
//             >
//               FAQ
//             </Link>
//           </div>

//           {/* Desktop CTA Button */}
//           <div className="hidden md:block">
//             {/* <Button className="bg-blue-100 text-black hover:bg-blue-200 font-body text-lg">{`Let's Get Started`}</Button> */}
//             <Link
//               className={`px-6 py-3 bg-blue-100 text-black hover:bg-blue-200 font-body text-lg rounded-md ${
//                 scrolled ? "bg-white" : "bg-blue-100"
//               }`}
//               href="/get-started"
//             >{`Let's Get Started`}</Link>
//           </div>

//           {/* Mobile Menu (Hamburger Icon) */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button size="icon" className="md:hidden text-lg" variant="ghost">
//                 {/* <Menu size={36} /> */}
//                 <Hamburger />
//               </Button>
//             </SheetTrigger>

//             {/* Side Drawer */}
//             <SheetContent side="left" className="w-64 bg-white p-6 shadow-lg">
//               <div className="flex justify-between items-center">
//                 <span className="text-xl font-semibold">ICCHub.ai</span>
//                 <Button variant="ghost" onClick={() => setIsOpen(false)}>
//                   {/* <X size={24} /> */}
//                 </Button>
//               </div>
//               <div className="mt-6 flex flex-col gap-4 text-lg">
//                 <Link
//                   href="/"
//                   onClick={() => setIsOpen(false)}
//                   className={`hover:text-blue-500 ${
//                     pathname === "#home" ? "border-b-2 border-blue-500" : ""
//                   }`}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/how-it-works"
//                   onClick={() => setIsOpen(false)}
//                   className={`hover:text-blue-500 ${
//                     pathname === "#how-it-works"
//                       ? "border-b-2 border-blue-500"
//                       : ""
//                   }`}
//                 >
//                   How it Works
//                 </Link>
//                 <Link
//                   href="/faq"
//                   onClick={() => setIsOpen(false)}
//                   className={`hover:text-blue-500 ${
//                     pathname === "#faq" ? "border-b-2 border-blue-500" : ""
//                   }`}
//                 >
//                   FAQ
//                 </Link>
//                 {/* <Button className="bg-blue-100 text-black hover:bg-blue-200 mt-4 w-full">{`Let's Get Started`}</Button> */}
//                 <Link
//                   className="px-6 py-3 bg-blue-100 text-black hover:bg-blue-200 font-body text-lg rounded-md"
//                   href="/get-started"
//                 >{`Let's Get Started`}</Link>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>

//       {/* Layout Wrapper */}
//       <div className="pt-16 container max-w-[1200px] mx-auto">{children}</div>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Hamburger } from "@/icons/hamburger";

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState("bg-blue-100 shadow-md");
  const [logoColor, setLogoColor] = useState("bg-white");
  const [activeSection, setActiveSection] = useState("/about");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const id = entry.target.getAttribute("id");
  //           if (id) setActiveSection(`/${id}`);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => sections.forEach((section) => observer.unobserve(section));
  // }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(`/${id}`);
          }
        });
      },
      {
        threshold: 0.75, // Ensures more of the section is visible before triggering
        rootMargin: "-50px 0px -50px 0px", // Fine-tunes the trigger point
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      console.log("scrollY", scrollY);

      if (scrollY >= 400 && scrollY < 850) {
        setBgColor("bg-blue-100 shadow-md"); // Light blue at mid-scroll
        setLogoColor("bg-white");
      } else if (scrollY >= 850 && scrollY < 1350) {
        setBgColor("bg-white shadow-md");
        setLogoColor("bg-blue-100"); // Light gray further down
      } else if (scrollY >= 1350 && scrollY < 2350) {
        setBgColor("bg-blue-100 shadow-md");
        setLogoColor("bg-white"); // Light gray further down
      } else if (scrollY >= 2350 && scrollY < 2950) {
        setBgColor("bg-white shadow-md");
        setLogoColor("bg-blue-100"); // Light gray further down
      } else if (scrollY > 2950) {
        setBgColor("bg-blue-100 shadow-md");
        setLogoColor("bg-white"); // Light gray further down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  console.log('activeSection', activeSection)
  console.log('pathname', pathname)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 justify-between items-center p-4 ${bgColor}`}
      >
        <div className="container max-w-[100vw] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <div className={`p-4 rounded-full text-lg font-bold ${logoColor}`}>
              flw
            </div>
            <span className="text-2xl font-semibold">ICCHub.ai</span>
          </Link>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex gap-6 text-lg">
            <Link
              href="/"
              className={`hover:text-blue-500 ${
                pathname === "/" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className={`hover:text-blue-500 ${
                pathname === "/how-it-works" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              How it Works
            </Link>
            <Link
              href="/services"
              className={`hover:text-blue-500 ${
                pathname === "/services" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/details-for-contractors"
              className={`hover:text-blue-500 ${
                pathname === "/details-for-contractors"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              Details for Contractors
            </Link>
            <Link
              href="/faq"
              className={`hover:text-blue-500 ${
                pathname === "/faq" ? "border-b-2 border-blue-500" : ""
              }`}
            >
              FAQ
            </Link>
          </div> */}



          <div className="hidden md:flex gap-6 text-lg">
            <Link
              href="/#about"
              className={`hover:text-blue-500 ${
                pathname === "/about" || activeSection === "/about"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className={`hover:text-blue-500 ${
                pathname === "/how-it-works" ||
                activeSection === "/how-it-works"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              How it Works
            </Link>
            <Link
              href="/#services"
              className={`hover:text-blue-500 ${
                pathname === "/services" || activeSection === "/services"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/#details-for-contractors"
              className={`hover:text-blue-500 ${
                pathname === "/details-for-contractors" ||
                activeSection === "/details"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              Details for Contractors
            </Link>
            <Link
              href="/#faq"
              className={`hover:text-blue-500 ${
                pathname === "/faq" || activeSection === "/faq"
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              FAQ
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              className={`px-6 py-3 ${logoColor} text-black hover:bg-blue-200 font-body text-lg rounded-md`}
              href="/get-started"
            >{`Let's Get Started`}</Link>
          </div>

          {/* Mobile Menu (Hamburger Icon) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size="icon" className="md:hidden text-lg" variant="ghost">
                <Hamburger />
              </Button>
            </SheetTrigger>

            {/* Side Drawer */}
            <SheetContent side="left" className="w-64 bg-white p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">ICCHub.ai</span>
                <Button
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                ></Button>
              </div>
              <div className="mt-6 flex flex-col gap-4 text-lg">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  About
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  How it Works
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Services
                </Link>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Details for Contractors
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  FAQ
                </Link>
                <Link
                  className={`px-6 py-3 bg-blue-100 text-black hover:bg-blue-200 font-body text-lg rounded-md`}
                  href="/get-started"
                >{`Let's Get Started`}</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Layout Wrapper */}
      <div className="pt-16 container max-w-[1200px] mx-auto">{children}</div>
    </>
  );
}
