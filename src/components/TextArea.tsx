import { RefObject } from "react";

interface ITextArea {
  placeholder: string;
  messageRef: RefObject<HTMLTextAreaElement | null>;
}

const TextArea = ({ placeholder, messageRef }: ITextArea) => {
  return (
    <textarea
      placeholder={placeholder}
      className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 active:ring-blue-400 min-w-[300px] focus-visible:outline-hidden"
      ref={messageRef}
    />
  );
};

export default TextArea;
