import { Stack } from "@chakra-ui/react";

const BlogEntry02 = () => {
  return (
    <Stack maxW={"50rem"}>
      <h1 className="mb-4 text-4xl font-semibold">IBM Tech 2024 Conference</h1>
      <p className="mb-2">Work in progress...</p>
      <p className="mb-2">
        Check the original article on Medium:{" "}
        <a
          target="_blank"
          className="text-blue-400 underline"
          href="https://medium.com/@denes-beck/insights-from-ibm-tech-2024-conference-511b4e2ebcd3"
        >
          IBM Tech 2024 Conference
        </a>
      </p>
    </Stack>
  );
};

export default BlogEntry02;
