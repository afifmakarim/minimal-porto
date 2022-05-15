import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <div className="nav-wrapper flex justify-center justify-around p-8 border-b-2 drop-shadow-md bg-white items-center sm:flex-row-reverse md:flex-row-reverse">
      <Link
        to="/"
        className="logo flex flex-col justify-center items-end tracking-wide"
      >
        <h4 className="font-base font-bold">AFIF MAKARIM</h4>
        <p className="text-xs font-thin">IT Enthusiast</p>
      </Link>
      <div className="navigation sm:hidden md:hidden">
        <Link
          className="mx-8 hover:border-b-4 hover:delay-75 hover:duration-75 hover:pb-2"
          to="/about"
        >
          About Me
        </Link>
        <Link
          className="mx-8 hover:border-b-4 hover:delay-75 hover:duration-75 hover:pb-2"
          to="/project"
        >
          Self Projects
        </Link>
        <Link
          className="mx-8 hover:border-b-4 hover:delay-75 hover:duration-75 hover:pb-2"
          to="/experience"
        >
          Experience
        </Link>
        <a
          href="http://rojoinferno.com"
          target="_blank"
          className="mx-8 hover:border-b-4 hover:delay-75 hover:duration-75 hover:pb-2"
        >
          Blogs
        </a>
        <a
          href="https://www.linkedin.com/in/afif-makarim-21b270167/"
          target="_blank"
          className="mx-8 hover:border-b-4 hover:delay-75 hover:duration-75 hover:pb-2"
        >
          LinkedIn
        </a>
      </div>
      <div className="dark-mode">
        <Link to="/" className="hover:bg-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
