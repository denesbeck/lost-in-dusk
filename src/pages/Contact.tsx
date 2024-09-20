import { Button, Heading2 } from "@/components";
import { useContact } from "@/hooks";
import { Input, Stack, Textarea } from "@chakra-ui/react";

const Contact = () => {
  const { nameRef, emailRef, messageRef, handleSubmit, loading } = useContact();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative group">
        <div className="absolute -right-[10%] -top-[10%] h-12 w-12 border-r-2 border-t-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-right-[8%] group-hover:-top-[8%]" />
        <div className="absolute -left-[10%] -top-[10%] h-48 w-48 border-l-2 border-t-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-left-[8%] group-hover:-top-[8%]" />
        <div className="absolute -bottom-[10%] -left-[10%] h-12 w-12 border-b-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-[8%] group-hover:-left-[8%]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-48 w-48 border-b-2 border-r-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-[8%] group-hover:-right-[8%]" />
        <Stack
          spacing={"1rem"}
          className="relative max-h-[calc(100vh-120px)] max-w-[90vw] overflow-auto p-6 ring-2 ring-slate-800 ring-offset-gray-900 backdrop-blur-md transition-all duration-200 ease-in-out hover:ring-slate-500 hover:ring-offset-2"
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
    </div>
  );
};

export default Contact;
