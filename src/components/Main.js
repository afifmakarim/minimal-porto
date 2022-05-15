import { Link } from "gatsby";
import * as React from "react";

export default function Main() {
  return (
    <div className="wrapper px-2 p-4">
      <div className="grid overflow-hidden grid-cols-3 grid-rows-5 gap-6 text-xl font-bold tracking-wider min-h-[70vh] mt-4 sm:gap-2 sm:text-sm md:text-sm sm:min-h-[100vh]">
        <Link
          to="/about"
          className="row-span-2 col-span-2 sm:row-span-1 sm:col-span-3 relative flex items-center drop-shadow-lg rounded-lg bg-[url('../images/image-1.jpg')] shadow-custom bg-cover bg-right hover:bg-right-top"
        >
          <p className="absolute px-8 drop-shadow-md">About Me</p>
        </Link>
        <a
          href="http://rojoinferno.com"
          target="_blank"
          className="row-span-3 sm:row-span-1 sm:col-span-3 relative flex items-center drop-shadow-lg rounded-lg bg-[url('../images/image-2.jpg')] shadow-custom bg-cover bg-right-top hover:bg-left"
        >
          <p className="absolute top-0 left-0 p-8 drop-shadow-md">Blogs</p>
        </a>
        <Link
          to="/experience"
          className="row-span-3 sm:row-span-1 sm:col-span-3 relative flex items-center drop-shadow-lg rounded-lg bg-[url('../images/image-3.jpg')] shadow-custom bg-cover bg-right-top hover:bg-left"
        >
          <p className="absolute top-0 left-0 p-8 drop-shadow-md">Experience</p>
        </Link>
        <Link
          to="/project"
          className="row-span-3 sm:row-span-1 sm:col-span-3 relative flex items-center justify-center drop-shadow-lg rounded-lg bg-[url('../images/image-4.jpg')] shadow-custom bg-no-repeat bg-cover bg-left-bottom hover:bg-right"
        >
          <p className="absolute drop-shadow-md">Self Projects</p>
        </Link>
        <a
          href="https://trakteer.id/rojokundo"
          target="_blank"
          className="row-span-2 sm:row-span-1 sm:col-span-3 relative drop-shadow-lg rounded-lg bg-[url('../images/image-5.jpg')] shadow-custom bg-cover bg-right hover:bg-top"
        >
          <p className="absolute top-0 right-0 p-8 drop-shadow-md">Trakteer</p>
        </a>
      </div>
    </div>
  );
}
