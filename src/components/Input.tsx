import { RefObject } from "react";

interface IInput {
  placeholder: string;
  nameRef: RefObject<HTMLInputElement | null>;
}

const Input = ({ placeholder, nameRef }: IInput) => {
  return (
    <input
      placeholder={placeholder}
      className="py-3 px-4 bg-transparent ring-2 focus-visible:ring-blue-400 active:ring-blue-400 ring-primary min-w-[300px] focus-visible:outline-hidden"
      ref={nameRef}
    />
  );
};

export default Input;
