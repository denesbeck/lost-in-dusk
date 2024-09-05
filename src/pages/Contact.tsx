import { Button } from "@/components";
import { Center, Input, Stack, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();
  return (
    <Center h={"100vh"}>
      <Stack
        spacing={"1rem"}
        className="relative max-h-[calc(100vh-180px)] max-w-[90vw] p-6"
      >
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-teal-400" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-teal-400" />
        <h2 className="text-2xl font-bold">Contact</h2>
        <Input
          w={"20rem"}
          placeholder="Name"
          rounded={"none"}
          border={"none"}
          className="py-3 px-4 bg-transparent ring-2 ring-teal-400"
        />
        <Input
          w={"20rem"}
          placeholder="Email"
          rounded={"none"}
          border={"none"}
          className="py-3 px-4 bg-transparent ring-2 ring-teal-400"
        />
        <Textarea
          w={"20rem"}
          placeholder="Message"
          rounded={"none"}
          border={"none"}
          className="py-3 px-4 bg-transparent ring-2 ring-teal-400"
        />
        <Button
          label={"Submit"}
          action={() => {
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
        />
      </Stack>
    </Center>
  );
};

export default Contact;
