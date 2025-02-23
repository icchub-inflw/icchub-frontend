'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Hamburger } from '@/icons/hamburger';

interface NavbarProps {
    children?: React.ReactNode;
  }

export default function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  console.log('pathname', pathname)

  return (
    <>
      <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
        <div className="container max-w-[1200px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href={'/'} className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full text-lg font-bold">flw</div>
            <span className="text-xl font-semibold">ICCHub.ai</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-lg">
            <Link href="/" className={`hover:text-blue-500 relative ${pathname === '/' ? 'border-b-2 border-blue-500' : ''}`}>Home</Link>
            <Link href="/how-it-works" className={`hover:text-blue-500 ${pathname === '/how-it-works' ? 'border-b-2 border-blue-500' : ''}`}>How it Works</Link>
            <Link href="/faq" className={`hover:text-blue-500 ${pathname === '/faq' ? 'border-b-2 border-blue-500' : ''}`}>FAQ</Link>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-100 text-black hover:bg-blue-200 font-body text-lg">Let's Get Started</Button>
          </div>

          {/* Mobile Menu (Hamburger Icon) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size="icon" className="md:hidden text-lg" variant="ghost">
                {/* <Menu size={36} /> */}
                <Hamburger />
              </Button>
            </SheetTrigger>
            
            {/* Side Drawer */}
            <SheetContent side="left" className="w-64 bg-white p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">ICCHub.ai</span>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  {/* <X size={24} /> */}
                </Button>
              </div>
              <div className="mt-6 flex flex-col gap-4 text-lg">
                <Link href="/" onClick={() => setIsOpen(false)} className={`hover:text-blue-500 ${pathname === '#home' ? 'border-b-2 border-blue-500' : ''}`}>Home</Link>
                <Link href="/how-it-works" onClick={() => setIsOpen(false)} className={`hover:text-blue-500 ${pathname === '#how-it-works' ? 'border-b-2 border-blue-500' : ''}`}>How it Works</Link>
                <Link href="/faq" onClick={() => setIsOpen(false)} className={`hover:text-blue-500 ${pathname === '#faq' ? 'border-b-2 border-blue-500' : ''}`}>FAQ</Link>
                <Button className="bg-blue-100 text-black hover:bg-blue-200 mt-4 w-full">Let's Get Started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      
      {/* Layout Wrapper */}
      <div className="pt-16 container max-w-[1200px] mx-auto">
        {children}
      </div>
    </>
  );
}
