interface ITag {
  name: string;
}
const Tag = ({ name }: ITag) => {
  return (
    <a
      href={`${window.location.origin}/blog?tag=${name}`}
      className="no-underline transition-all duration-200 ease-in-out cursor-pointer hover:underline hover:scale-110 decoration-dashed underline-offset-4"
    >
      #{name}
    </a>
  );
};

export default Tag;
