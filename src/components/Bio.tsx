import { Stack } from "@chakra-ui/react";
import Heading2 from "./Heading2";

const BIO =
  "Passionate about leveraging technology to streamline software development processes and optimize infrastructure for enhanced efficiency and scalability. Skilled in CI/CD, IaC, automation, container and cloud technologies.";

const Bio = () => {
  return (
    <Stack
      gap={8}
      maxW={"26rem"}
      overflowX={"auto"}
      className="animate-textFocus"
      px={4}
    >
      <Heading2 content="Bio" />
      <p className="overflow-auto pb-2 break-words w-[25rem]">{BIO}</p>
    </Stack>
  );
};

export default Bio;
