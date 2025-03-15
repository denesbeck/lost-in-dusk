interface ITitle {
  content: string;
}

const Title = ({ content }: ITitle) => {
  return <div className="mb-2 text-4xl font-semibold">{content}</div>;
};

export default Title;
