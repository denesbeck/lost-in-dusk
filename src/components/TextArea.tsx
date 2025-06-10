import { RefObject } from "react";

interface ITextArea {
  placeholder: string;
  messageRef: RefObject<HTMLTextAreaElement | null>;
}

const TextArea = ({ placeholder, messageRef }: ITextArea) => {
  return (
    <textarea
      placeholder={placeholder}
      className="py-3 px-4 bg-transparent ring-2 focus-visible:ring-blue-400 active:ring-blue-400 ring-primary min-w-[300px] focus-visible:outline-hidden"
      ref={messageRef}
    />
  );
};

export default TextArea;
