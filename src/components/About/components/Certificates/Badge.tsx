interface BadgeProps {
  url: string;
  size?: number;
  img: string;
  alt: string;
}

const Badge = ({ url, size = 28, img, alt }: BadgeProps) => {
  return (
    <a
      className="transition-all duration-200 ease-in hover:scale-110 hover:brightness-125"
      href={url}
      target="_blank"
    >
      <img width={size} height={size} src={img} alt={alt} />
    </a>
  );
};

export default Badge;
