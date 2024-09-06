interface Heading1Props {
  children: string;
}

const Heading1 = ({ children }: Heading1Props) => {
  return <h1 className="w-full text-4xl font-semibold">{children}</h1>;
};

export default Heading1;
