import { Heading2 } from "@/components";
import { Center, Input, Stack, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();
  return (
    <Center h={"100vh"}>
      <Stack spacing={"1rem"} className="group relative bg-gray-900 p-6">
        <div className="absolute -right-4 -top-4 h-12 w-12 border-r-4 border-t-4 border-teal-400 transition-transform duration-200 ease-in-out group-hover:scale-110" />
        <div className="absolute -bottom-4 -left-4 h-12 w-12 border-b-4 border-l-4 border-teal-400 transition-transform duration-200 ease-in-out group-hover:scale-110" />
        <h2 className="text-xl font-bold">Contact</h2>
        <Input
          placeholder="Name"
          className="bg-transparent px-4 py-3 ring-2 ring-teal-400"
        />
        <Input
          placeholder="Email"
          className="bg-transparent px-4 py-3 ring-2 ring-teal-400"
        />
        <Textarea
          placeholder="Message"
          className="bg-transparent px-4 py-3 ring-2 ring-teal-400"
        />
        <button
          onClick={() => {
            if (!toast.isActive("not-implemented"))
              toast({
                id: "not-implemented",
                title: "Info",
                position: "top-right",
                variant: "subtle",
                description: "Not implemented yet",
                status: "info",
                duration: 5000,
                isClosable: true,
              });
          }}
          className="mt-8 -skew-x-6 bg-teal-500 px-4 py-2 ring-2 ring-teal-500 transition-colors duration-200 ease-in-out hover:bg-gray-900 hover:text-teal-500 hover:shadow-[10px_10px_0px_0px_black] active:bg-gray-800"
        >
          Submit
        </button>
      </Stack>
    </Center>
  );
};

export default Contact;
