'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 text-center md:grid-cols-3 gap-8 items-start">
        {/* Left Section - Brand & Legal Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold">ICCHub.ai</h2>
          <p className="text-sm text-gray-400 mt-2">Empowering your renovation projects with AI.</p>
          <div className="mt-4 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <span className="mx-2">|</span>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link>
            <span className="mx-2">|</span>
            <Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
          </div>
          <div className="mt-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
          </div>
        </div>

        {/* Center Section - Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-400">Have questions? We're here to help.</p>
          <Link href="/contact" className="text-blue-400 hover:text-white mt-2 block">Get in Touch</Link>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="https://instagram.com" target="_blank" className="hover:text-blue-400">
              <Instagram size={24} />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">
              <Facebook size={24} />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-red-400">
              <Youtube size={24} />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Section */}
      <div className="mt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} ICCHub.ai. All rights reserved.</div>
    </footer>
  );
}
