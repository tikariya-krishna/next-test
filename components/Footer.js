"use client";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold text-white">MyBlog</h2>
          <p className="mt-3 text-sm text-gray-400">
            Sharing thoughts, tutorials, and stories on web development,
            React, Next.js, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Me</h3>
          <div className="flex space-x-4 mt-3 text-xl">
            <a href="https://github.com/" target="_blank" className="hover:text-white">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-white">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
