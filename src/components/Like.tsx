import { BiSolidLike } from "react-icons/bi";

interface LikeProps {
  id: number;
}
const Like = ({ id }: LikeProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log(`Liked ${id}`);
      }}
      className="p-1 transition-transform duration-200 ease-in-out hover:scale-110 active:text-blue-400"
    >
      <BiSolidLike className="text-2xl" />
    </button>
  );
};

export default Like;
