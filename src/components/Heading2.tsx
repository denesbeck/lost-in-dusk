interface Heading2Props {
  children: string;
}

const Heading2 = ({ children }: Heading2Props) => {
  return <h2 className="w-full text-2xl font-semibold">{children}</h2>;
};

export default Heading2;
