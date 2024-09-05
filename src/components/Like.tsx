import { BiSolidLike } from "react-icons/bi";
import { useToast } from "@chakra-ui/react";

interface LikeProps {
  id: number;
}
const Like = ({ id }: LikeProps) => {
  const toast = useToast();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        if (!toast.isActive(`like-${id}`))
          toast({
            id: `like-${id}`,
            title: "Info",
            position: "top-right",
            variant: "subtle",
            description: "Not implemented yet",
            status: "info",
            duration: 5000,
            isClosable: true,
          });
      }}
      className="p-1 transition-transform duration-200 ease-in-out hover:scale-110 active:text-blue-400"
    >
      <BiSolidLike className="text-2xl" />
    </button>
  );
};

export default Like;
