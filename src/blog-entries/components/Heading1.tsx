interface IHeading1 {
  content: string;
}

const Heading1 = ({ content }: IHeading1) => {
  return <h2 className="mt-4 text-2xl font-semibold">{content}</h2>;
};

export default Heading1;
