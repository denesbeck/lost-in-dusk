interface IHeading1 {
  content: string;
}

const Heading1 = ({ content }: IHeading1) => {
  return <div className="mt-4 text-2xl font-bold">{content}</div>;
};

export default Heading1;
