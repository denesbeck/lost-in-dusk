interface IImageContainer {
  children: React.ReactNode;
}

const ImageContainer = ({ children }: IImageContainer) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default ImageContainer;
