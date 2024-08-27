interface Heading2Props {
  content: string;
}

const Heading2 = ({ content }: Heading2Props) => {
  return <h2 className="w-full font-semibold animate-textFocus">{content}</h2>;
};

export default Heading2;
