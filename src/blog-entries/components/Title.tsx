interface ITitle {
  content: string;
}

const Title = ({ content }: ITitle) => {
  return <h1 className="mb-2 text-4xl font-semibold">{content}</h1>;
};

export default Title;
