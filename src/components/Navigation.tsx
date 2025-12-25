"use client";

import React from "react";

interface NavigationLink {
  label: string;
  href: string;
}

const Navigation: React.FC = () => {
  const links: NavigationLink[] = [
    { label: "홈", href: "/" },
    { label: "경력", href: "/#experience" },
    // { label: "프로젝트", href: "/#projects" },
    { label: "리뷰", href: "/#reviews" },
    { label: "블로그", href: "/#blog" },
  ];

  return (
    <nav className="bg-primary-light/80 border-secondary-peach/10 sticky top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-text-primary hover:text-secondary-coral text-2xl font-bold transition-colors"
          >
            Portfolio
          </a>

          {/* Navigation Links */}
          <ul className="hidden list-none items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className="text-text-primary hover:text-secondary-coral font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Hidden on mobile */}
          <a href="#contact" className="btn btn-primary hidden md:inline-block">
            연락하기
          </a>

          {/* Mobile Menu Button */}
          <button className="text-text-primary hover:text-secondary-coral p-2 md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
