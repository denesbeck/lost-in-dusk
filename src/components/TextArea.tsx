import { RefObject } from "react";

interface ITextArea {
  placeholder: string;
  messageRef: RefObject<HTMLTextAreaElement | null>;
}

const TextArea = ({ placeholder, messageRef }: ITextArea) => {
  return (
    <textarea
      placeholder={placeholder}
      className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 focus-visible:outline-hidden active:ring-blue-400 w-[20rem] max-w-[70vw]"
      ref={messageRef}
    />
  );
};

export default TextArea;
