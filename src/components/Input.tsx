import { RefObject } from "react";

interface IInput {
  placeholder: string;
  nameRef: RefObject<HTMLInputElement | null>;
}

const Input = ({ placeholder, nameRef }: IInput) => {
  return (
    <input
      placeholder={placeholder}
      className="py-3 px-4 bg-transparent ring-2 ring-teal-400 focus-visible:ring-blue-400 focus-visible:outline-hidden active:ring-blue-400 w-[20rem] max-w-[70vw]"
      ref={nameRef}
    />
  );
};

export default Input;
