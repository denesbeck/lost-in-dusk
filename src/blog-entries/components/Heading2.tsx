interface IHeading2 {
  content: string;
}

const Heading2 = ({ content }: IHeading2) => {
  return <h3 className="text-xl font-semibold">{content}</h3>;
};

export default Heading2;
