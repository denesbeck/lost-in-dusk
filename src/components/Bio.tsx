import { Stack } from "@chakra-ui/react";
import { Heading3 } from "@/components";

const BIO =
  "Passionate about leveraging technology to streamline software development processes and optimize infrastructure for enhanced efficiency and scalability. Skilled in CI/CD, IaC, automation, container and cloud technologies.";

const Bio = () => {
  return (
    <Stack
      gap={2}
      maxW={"29rem"}
      overflowX={"auto"}
      className="animate-textFocus"
      px={2}
    >
      <Heading3>Bio</Heading3>
      <p className="pb-2 break-words">{BIO}</p>
    </Stack>
  );
};

export default Bio;
