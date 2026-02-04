import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  products: [
    { name: "All Bikes", href: "/all-bikes" },
    { name: "Grood Siem Reap", href: "/bikes/siemreap" },
    { name: "Grood Phnom Penh", href: "/bikes/phnompenh" },
    { name: "Convertion Kit", href: "/convert" },
    { name: "Accessories", href: "/accessories" },
    { name: "Specs", href: "/specs" },
  ],
  company: [
    { name: "Our Story", href: "/our-story" },
    { name: "Warranty", href: "/warranty" },
    { name: "Test Ride", href: "/test-ride" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQs", href: "/faqs" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Service Centers", href: "/service" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-deep text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Stay in the loop
              </h3>
              <p className="text-white/60">
                Get the latest news, updates, and exclusive offers.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 bg-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-80"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-secondary text-black font-bold rounded-full hover:bg-secondary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/logo-yellow.png"
                alt="Grood"
                width={120}
                height={80}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              Premium electric bikes designed for the modern city. Silent power,
              smart features, iconic design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Products
            </h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} GROOD. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
