interface IHeading2 {
  content: string;
}

const Heading2 = ({ content }: IHeading2) => {
  return <div className="text-xl font-bold">{content}</div>;
};

export default Heading2;
