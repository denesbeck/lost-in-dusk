import { Link } from "react-router-dom";

interface ITag {
  name: string;
}

const Tag = ({ name }: ITag) => {
  return (
    <Link
      to={{
        pathname: `/blog`,
        search: `?tag=${name}`,
      }}
      className="no-underline transition-all duration-200 ease-in-out cursor-pointer hover:underline hover:scale-110 decoration-dashed underline-offset-4"
    >
      #{name}
    </Link>
  );
};

export default Tag;
