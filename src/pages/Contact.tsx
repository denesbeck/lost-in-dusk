import { Button, Heading2 } from "@/components";
import { useContact } from "@/hooks";
import { Center, Input, Stack, Textarea } from "@chakra-ui/react";

const Contact = () => {
  const { nameRef, emailRef, messageRef, handleSubmit, loading } = useContact();

  return (
    <Center h={"100vh"}>
      <div className="relative group">
        <div className="absolute -top-8 -right-8 w-12 h-12 border-t-2 border-r-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-top-6 group-hover:-right-6" />
        <div className="absolute -top-8 -left-8 w-48 h-48 border-t-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-top-6 group-hover:-left-6" />
        <div className="absolute -bottom-8 -left-8 w-12 h-12 border-b-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-6 group-hover:-left-6" />
        <div className="absolute -right-8 -bottom-8 w-48 h-48 border-r-2 border-b-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-right-6 group-hover:-bottom-6" />
        <Stack
          spacing={"1rem"}
          className="relative max-h-[calc(100vh-180px)] max-w-[90vw] overflow-auto px-1 ring-teal-400 ring-offset-gray-900 backdrop-blur-md transition-all duration-200 ease-in-out hover:ring-offset-2 lg:bg-gray-900 lg:p-6 lg:ring-2 lg:ring-slate-800 hover:lg:ring-slate-500"
        >
          <Heading2>Contact</Heading2>
          <Input
            w={"20rem"}
            placeholder="Name"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 max-w-[70vw]"
            ref={nameRef}
          />
          <Input
            w={"20rem"}
            placeholder="Email"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 max-w-[70vw]"
            ref={emailRef}
          />
          <Textarea
            w={"20rem"}
            placeholder="Message"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 max-w-[70vw]"
            ref={messageRef}
          />
          <Button label={"Submit"} action={handleSubmit} loading={loading} />
        </Stack>
      </div>
    </Center>
  );
};

export default Contact;
