interface IImageContainer {
  children: React.ReactNode;
}

const ImageContainer = ({ children }: IImageContainer) => {
  return <div className="grid gap-2">{children}</div>;
};

export default ImageContainer;
