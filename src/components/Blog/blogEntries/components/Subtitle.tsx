interface ISubtitle {
  content: string;
}

const Subtitle = ({ content }: ISubtitle) => {
  return <div className="mb-4 text-xl font-light">{content}</div>;
};

export default Subtitle;
