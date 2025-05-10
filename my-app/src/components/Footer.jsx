import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Larsen & Toubro</h2>
          <p className="text-sm">
            A leading Indian multinational engaged in engineering, construction, manufacturing, technology & financial services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/media" className="hover:underline">Media</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Businesses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Our Businesses</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/construction" className="hover:underline">Construction</Link></li>
            <li><Link href="/hydrocarbon" className="hover:underline">Hydrocarbon</Link></li>
            <li><Link href="/engineering" className="hover:underline">Engineering</Link></li>
            <li><Link href="/it-services" className="hover:underline">IT Services</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5 hover:text-white" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 hover:text-white" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="w-5 h-5 hover:text-white" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Larsen & Toubro Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
