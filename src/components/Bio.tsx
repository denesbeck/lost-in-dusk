import { Stack } from "@chakra-ui/react";
import { Heading3 } from "@/components";

const BIO =
  "Passionate about leveraging technology to streamline software development processes and optimize infrastructure for enhanced efficiency and scalability. Skilled in CI/CD, IaC, automation, container and cloud technologies.";

const Bio = () => {
  return (
    <Stack
      gap={2}
      maxW={"26rem"}
      overflowX={"auto"}
      className="animate-textFocus"
      px={2}
    >
      <Heading3>Bio</Heading3>
      <p className="overflow-auto pb-2 break-words w-[25rem]">{BIO}</p>
    </Stack>
  );
};

export default Bio;
