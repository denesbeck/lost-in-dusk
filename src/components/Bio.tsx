import { Stack } from "@chakra-ui/react";
import { Heading3 } from "@/components";

const BIO =
  "Passionate about leveraging cutting-edge technology to streamline software development workflows and optimize infrastructure for greater efficiency, scalability, and reliability. As a full-stack developer, I specialize in building modern, high-performance web applications using Next.js, React, Node.js, TypeScript, and AWS. Experienced in implementing CI/CD pipelines, Infrastructure as Code (IaC), and automation to drive seamless development and deployment processes. Focused on delivering high-impact solutions that enhance both developer experience and operational performance.";

const Bio = () => {
  return (
    <Stack
      gap={2}
      maxW={"30rem"}
      overflowX={"auto"}
      className="animate-textFocus"
      px={2}
    >
      <Heading3>Bio</Heading3>
      <p className="overflow-y-auto max-h-44 break-words">{BIO}</p>
    </Stack>
  );
};

export default Bio;
