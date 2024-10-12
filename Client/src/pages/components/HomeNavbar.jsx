import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Simulating the navItems import
const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "About", href: "#About" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const HomeNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-gray-800 bg-black/50">
      <div className="container px-4 mx-auto relative text-sm text-white">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight font-semibold bg-gradient-to-r from-blue-500 to-red-800 bg-clip-text text-transparent">
              CodeConnect
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="/signin"
              className="py-2 px-3 border border-gray-600 rounded-md hover:border-blue-500 transition-colors duration-300"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="bg-gradient-to-r from-blue-500 to-red-800 py-2 px-3 rounded-md hover:from-blue-600 hover:to-red-900 transition-all duration-300"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex flex-col justify-end">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed right-0 top-[57px] bg-black/95 backdrop-blur-lg w-full transition-all duration-300 ease-in-out ${
            mobileDrawerOpen
              ? "opacity-100 h-screen"
              : "opacity-0 h-0 pointer-events-none"
          }`}
        >
          <div
            className={`p-12 flex flex-col justify-center items-center transform transition-transform duration-300 ${
              mobileDrawerOpen ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            <ul className="mb-8">
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col space-y-4 w-full max-w-xs">
              <a
                href="#"
                className="py-2 px-3 border border-gray-600 rounded-md text-center hover:border-blue-500 transition-colors duration-300"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-red-800 py-2 px-3 rounded-md text-center hover:from-blue-600 hover:to-red-900 transition-all duration-300"
              >
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
