import { Stack, Tooltip, Wrap } from "@chakra-ui/react";
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
    <Stack maxW={"29rem"} overflowX={"auto"} pb={2} gap={2} px={2}>
      <Heading3>Skills</Heading3>
      <Wrap spacing={4} className="items-center">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;
          return (
            <SkillBadge key={skill.name} label={skill.name}>
              <Icon className="text-3xl text-teal-400 transition-all duration-200 ease-in-out hover:scale-110 hover:brightness-125" />
            </SkillBadge>
          );
        })}
      </Wrap>
    </Stack>
  );
};

export default Skills;
