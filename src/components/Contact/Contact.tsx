import { Button, Heading2, Input, TextArea } from "@/components";
import { useContact, useTurnstile } from "./hooks";
import { Turnstile } from "./components";

const Contact = () => {
  const { nameRef, emailRef, messageRef, handleSubmit, loading } = useContact();

  const { token } = useTurnstile();
  return (
    <div className="flex flex-col justify-center items-center animate-slide-in-from-bottom h-dvh">
      <div className="relative group">
        <div className="hidden absolute w-12 h-12 border-t-2 border-r-2 transition-all duration-200 ease-in-out sm:block border-primary -top-[24px] -right-[24px] group-hover:-top-[16px] group-hover:-right-[16px]" />
        <div className="hidden absolute w-48 h-48 border-t-2 border-l-2 transition-all duration-200 ease-in-out sm:block border-primary -top-[24px] -left-[24px] group-hover:-top-[16px] group-hover:-left-[16px]" />
        <div className="hidden absolute w-12 h-12 border-b-2 border-l-2 transition-all duration-200 ease-in-out sm:block border-primary -bottom-[24px] -left-[24px] group-hover:-bottom-[16px] group-hover:-left-[16px]" />
        <div className="hidden absolute w-48 h-48 border-r-2 border-b-2 transition-all duration-200 ease-in-out sm:block border-primary -right-[24px] -bottom-[24px] group-hover:-right-[16px] group-hover:-bottom-[16px]" />
        <div className="flex overflow-auto relative flex-col p-6 min-w-max ring-2 transition-all duration-200 ease-in-out hover:ring-gray-500 hover:ring-offset-2 ring-secondary ring-offset-root h-max max-h-[calc(100dvh-200px)] max-w-[90dvw] gap-[1rem] backdrop-blur-md">
          <Heading2>Contact </Heading2>
          <Input placeholder="Name" nameRef={nameRef} />
          <Input placeholder="Email" nameRef={emailRef} />
          <TextArea placeholder="Message" messageRef={messageRef} />
          <Turnstile />
          <Button
            disabled={!token}
            label={"Submit"}
            action={() => {
              if (token) handleSubmit(token);
            }}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
