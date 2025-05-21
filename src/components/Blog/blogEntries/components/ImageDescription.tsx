interface IImageDescription {
  description: string;
}

const ImageDescription = ({ description }: IImageDescription) => {
  return (
    <div className="text-sm text-center text-slate-400">{description}</div>
  );
};

export default ImageDescription;
