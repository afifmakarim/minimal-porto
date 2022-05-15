import * as React from "react";
import { Link } from "gatsby";
import aboutData from "../data/data.json";

export default function ProjectSection() {
  return (
    <div className="wrapper flex flex-col p-8">
      <h4 className="flex justify-center text-4xl font-bold underline underline-offset-1 decoration-slate-500 tracking-wide">
        Self Project
      </h4>
      {aboutData.projects.map((item, index) => (
        <div
          key={index}
          className="mt-4 border rounded-2xl p-8 tracking-wider leading-relaxed flex justify-between items-center "
        >
          <div className="description">
            <h4 className="text-2xl font-bold">{item.name}</h4>
            <p className="text-sm font-light">
              {item.platform} - {item.framework}
            </p>
          </div>
          <a
            className="link-arrow flex hover:text-slate-500"
            href={item.url}
            target="_blank"
          >
            <span className="px-2">VIEW</span>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
