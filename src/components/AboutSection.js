import * as React from "react";
import Figura from "../images/Frame.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhp,
  faFontAwesome,
  faHtml,
} from "@fortawesome/free-brands-svg-icons";
import aboutData from "../data/data.json";
import "../utils/font-awesome";
import { Zoom } from "react-reveal";

export default function AboutSection() {
  return (
    <div className="mt-7 flex justify-center">
      <div className="wrapper flex justify-center flex-col items-center">
        <Zoom bottom>
          <img className="grayscale w-80" src={Figura} alt="afif makarim" />

          <h4 className="techstack text-4xl flex justify-center my-8">
            {aboutData.skills.map((item, index) => (
              <FontAwesomeIcon
                className="mx-2"
                key={index}
                icon={`${item.icon}`}
              />
            ))}
          </h4>
          <p className="p-4 w-3/4 tracking-wide	font-light leading-relaxed">
            <a className="font-bold ">Hello</a>, I'am Afif. I completed my
            degree in computer science at Gunadarma University. A self-motivated
            person with extensive knowledge of computer science. Seeking an
            entry position on software development where i can utilise my
            skills, put my learning into practice and make a contribution. If
            you'd like to start a new project, need help with an existing
            project or have any other enquiry, please get in touch.{" "}
            <a className="font-bold ">afifmakarim88@gmail.com</a>
          </p>
        </Zoom>
      </div>
    </div>
  );
}
