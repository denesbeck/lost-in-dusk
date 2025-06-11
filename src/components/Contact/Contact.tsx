import { Button, Heading2, Input, TextArea } from "@/components";
import { useContact, useTurnstile } from "./hooks";
import { Turnstile } from "./components";

const Contact = () => {
  const { nameRef, emailRef, messageRef, handleSubmit, loading } = useContact();

  const { token } = useTurnstile();
  return (
    <div className="flex flex-col justify-center items-center animate-slide-in-from-bottom h-dvh">
      <div className="relative group">
        <div className="border-primary absolute -top-[6%] -right-[6%] hidden h-12 w-12 border-t-2 border-r-2 transition-all duration-200 ease-in-out group-hover:-top-[5%] group-hover:-right-[5%] sm:block" />
        <div className="border-primary absolute -top-[6%] -left-[6%] hidden h-48 w-48 border-t-2 border-l-2 transition-all duration-200 ease-in-out group-hover:-top-[5%] group-hover:-left-[5%] sm:block" />
        <div className="border-primary absolute -bottom-[6%] -left-[6%] hidden h-12 w-12 border-b-2 border-l-2 transition-all duration-200 ease-in-out group-hover:-bottom-[5%] group-hover:-left-[5%] sm:block" />
        <div className="border-primary absolute -right-[6%] -bottom-[6%] hidden h-48 w-48 border-r-2 border-b-2 transition-all duration-200 ease-in-out group-hover:-right-[5%] group-hover:-bottom-[5%] sm:block" />
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
