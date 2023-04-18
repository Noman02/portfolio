import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import  SectionWrapper  from "../hoc/SectionWrapper"

import {styles} from "../styles"

const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText}`}>SKILLS</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");