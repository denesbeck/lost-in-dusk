import { Heading3 } from "@/components";
import { SKILLS } from "../config/data";
import Tooltip from "@mui/material/Tooltip";

const Skills = () => {
  return (
    <div className="overflow-x-auto px-2 pb-2 animate-text-focus max-w-[30rem]">
      <Heading3>Skills</Heading3>
      <div className="flex flex-wrap gap-4 items-center mt-3.5">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <Tooltip key={skill.name} arrow title={skill.name}>
              <Icon className="text-3xl text-teal-400 transition-all duration-200 ease-in-out hover:scale-110 hover:brightness-125" />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
