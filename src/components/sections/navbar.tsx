"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Hamburger } from "@/icons/hamburger";
import Image from "next/image";

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [logoColor, setLogoColor] = useState("bg-white");
  const [activeSection, setActiveSection] = useState("/faq");

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
            console.log("---id---", id);
            if (id) setActiveSection(`/${id}`);
          }
        });
      },
      {
        threshold: 0.5, // Ensures more of the section is visible before triggering
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

      if (scrollY >= 0 && scrollY < 250) {
        setBgColor("bg-transparent"); // Light blue at mid-scroll
        setLogoColor("bg-white");
      } else if (scrollY >= 250 && scrollY < 1350) {
        setBgColor("bg-white shadow-md");
        setLogoColor("bg-brand-light"); // Light gray further down
      } else if (scrollY >= 1350 && scrollY < 2350) {
        setBgColor("bg-brand-light shadow-md");
        setLogoColor("bg-white"); // Light gray further down
      } else if (scrollY >= 2350 && scrollY < 2950) {
        setBgColor("bg-white shadow-md");
        setLogoColor("bg-brand-light"); // Light gray further down
      } else if (scrollY > 2950) {
        setBgColor("bg-brand-light shadow-md");
        setLogoColor("bg-white"); // Light gray further down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("activeSection", activeSection);
  console.log("pathname", pathname);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 justify-between items-center p-4 ${bgColor}`}
      >
        <div className="container max-w-[100vw] mx-auto flex justify-between items-center">
          {/* Main Navigation Logo */}
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/inflw.mainlogo.png"
              alt="Main logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-lg">
            <Link
              href="#about"
              className={`hover:text-brand ${activeSection === "/about" ? "border-b-2 border-brand" : ""
                }`}
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className={`hover:text-brand ${activeSection === "/how-it-works"
                ? "border-b-2 border-brand"
                : ""
                }`}
            >
              How it Works
            </Link>
            <Link
              href="#services"
              className={`hover:text-brand ${activeSection === "/services"
                ? "border-b-2 border-brand"
                : ""
                }`}
            >
              Services
            </Link>
            <Link
              href="#details-for-contractors"
              className={`hover:text-brand ${activeSection === "/details-for-contractors"
                ? "border-b-2 border-brand"
                : ""
                }`}
            >
              Details for Trades Pros
            </Link>
            <Link
              href="#faq"
              className={`hover:text-brand ${activeSection === "/faq" ? "border-b-2 border-blue-500" : ""
                }`}
            >
              FAQ
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              className={`px-6 py-3 ${logoColor} text-black hover:bg-brand-light font-body text-lg rounded-md`}
              // href="/get-started"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdk21aY6OYbuCLXGT0hnuRzqEPGLL9D0Xixc-nNdFfxYzd2dg/viewform"
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
                <span className="text-xl font-semibold">inflw.ai</span>
                <Button
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                ></Button>
              </div>
              <div className="mt-6 flex flex-col gap-4 text-lg">
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  About
                </Link>
                <Link
                  href="#how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  How it Works
                </Link>
                <Link
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Services
                </Link>
                <Link
                  href="#details-for-contractors"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  Details for Trades Pros
                </Link>
                <Link
                  href="#faq"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-500"
                >
                  FAQ
                </Link>
                <Link
                  className={`px-6 py-3 bg-brand text-black hover:bg-brand-light font-body text-lg rounded-md`}
                  // href="/get-started"
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdk21aY6OYbuCLXGT0hnuRzqEPGLL9D0Xixc-nNdFfxYzd2dg/viewform"
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
