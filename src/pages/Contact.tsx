import { Button, Heading2, Input, TextArea } from "@/components";
import { useContact } from "@/hooks";

const Contact = () => {
  const { nameRef, emailRef, messageRef, handleSubmit, loading } = useContact();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative group">
        <div className="absolute -right-[6%] -top-[6%] h-12 w-12 border-r-2 border-t-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-right-[5%] group-hover:-top-[5%]" />
        <div className="absolute -left-[6%] -top-[6%] h-48 w-48 border-l-2 border-t-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-left-[5%] group-hover:-top-[5%]" />
        <div className="absolute -bottom-[6%] -left-[6%] h-12 w-12 border-b-2 border-l-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-[5%] group-hover:-left-[5%]" />
        <div className="absolute -bottom-[6%] -right-[6%] h-48 w-48 border-b-2 border-r-2 border-teal-400 transition-all duration-200 ease-in-out group-hover:-bottom-[5%] group-hover:-right-[5%]" />
        <div className="flex overflow-auto relative flex-col p-6 ring-2 ring-offset-gray-900 transition-all duration-200 ease-in-out hover:ring-offset-2 max-h-[calc(100vh-170px)] max-w-[90vw] gap-[1rem] ring-slate-800 backdrop-blur-md hover:ring-slate-500">
          <Heading2>Contact</Heading2>
          <Input placeholder="Name" nameRef={nameRef} />
          <Input placeholder="Email" nameRef={emailRef} />
          <TextArea placeholder="Message" messageRef={messageRef} />
          <Button label={"Submit"} action={handleSubmit} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
