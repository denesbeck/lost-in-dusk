interface ISubtitle {
  content: string;
}

const Subtitle = ({ content }: ISubtitle) => {
  return <h3 className="mb-4 text-xl font-light">{content}</h3>;
};

export default Subtitle;
