import * as React from "react";
import { Slide } from "react-reveal";
import aboutData from "../data/data.json";

export default function ExperienceSection() {
  return (
    <div className="wrapper flex flex-col p-8">
      <Slide bottom>
        <h4 className="flex justify-center text-4xl font-bold underline underline-offset-1 decoration-slate-500 tracking-wide">
          Works Experience
        </h4>
        {aboutData.experience.map((item, index) => (
          <div
            key={index}
            className="mt-7 border rounded-2xl p-8 tracking-wider flex justify-between items-center"
          >
            <div className="description">
              <h4 className="text-2xl font-bold">{item.name}</h4>
              <p className="text-md font-light my-2">{item.role}</p>
              <p className="text-sm font-light">
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
