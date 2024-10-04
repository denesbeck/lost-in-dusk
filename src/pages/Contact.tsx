import { Button, Heading2 } from "@/components";
import { useContact } from "@/hooks";
import { Input, Stack, Textarea } from "@chakra-ui/react";

const Contact = () => {
  const { nameRef, emailRef, messageRef, handleSubmit, loading } = useContact();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="group relative">
        <div className="absolute -right-[6%] -top-[6%] h-12 w-12 border-r-2 border-t-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-right-[5%] group-hover:-top-[5%]" />
        <div className="absolute -left-[6%] -top-[6%] h-48 w-48 border-l-2 border-t-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-left-[5%] group-hover:-top-[5%]" />
        <div className="absolute -bottom-[6%] -left-[6%] h-12 w-12 border-b-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-[5%] group-hover:-left-[5%]" />
        <div className="absolute -bottom-[6%] -right-[6%] h-48 w-48 border-b-2 border-r-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-[5%] group-hover:-right-[5%]" />
        <Stack
          spacing={"1rem"}
          className="relative max-h-[calc(100vh-170px)] max-w-[90vw] overflow-auto p-6 ring-2 ring-slate-800 ring-offset-gray-900 backdrop-blur-md transition-all duration-200 ease-in-out hover:ring-slate-500 hover:ring-offset-2"
        >
          <Heading2>Contact</Heading2>
          <Input
            w={"20rem"}
            placeholder="Name"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="max-w-[70vw] bg-transparent px-4 py-3 ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400"
            ref={nameRef}
          />
          <Input
            w={"20rem"}
            placeholder="Email"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="max-w-[70vw] bg-transparent px-4 py-3 ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400"
            ref={emailRef}
          />
          <Textarea
            w={"20rem"}
            placeholder="Message"
            rounded={"none"}
            border={"none"}
            _focusVisible={{ boxShadow: "not-implemented" }}
            className="max-w-[70vw] bg-transparent px-4 py-3 ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400"
            ref={messageRef}
          />
          <Button label={"Submit"} action={handleSubmit} loading={loading} />
        </Stack>
      </div>
    </div>
  );
};

export default Contact;
