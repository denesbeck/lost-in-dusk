import { Tooltip } from "@chakra-ui/react";
import { Heading3 } from "@/components";
import { SKILLS } from "@/config/data/about";
import { ReactElement } from "react";

interface SkillBadgeProps {
  children: ReactElement;
  label: string;
}
const SkillBadge = ({ children, label }: SkillBadgeProps) => {
  return (
    <Tooltip hasArrow label={label} bg="gray.700" textColor="white">
      <span>{children}</span>
    </Tooltip>
  );
};

const Skills = () => {
  return (
    <div className="overflow-x-auto px-2 pb-2 max-w-[30rem]">
      <Heading3>Skills</Heading3>
      <div className="flex flex-wrap gap-4 items-center mt-3.5">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <SkillBadge key={skill.name} label={skill.name}>
              <Icon className="text-3xl text-teal-400 transition-all duration-200 ease-in-out hover:scale-110 hover:brightness-125" />
            </SkillBadge>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
