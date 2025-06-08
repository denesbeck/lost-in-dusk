import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface IShare {
  id: number;
}

const Share = ({ id }: IShare) => {
  return (
    <div className="mt-8">
      <div className="font-bold">Share this post on:</div>
      <div className="flex py-2 space-x-4">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://lostindusk.com/blog/${id}`}
          target="_blank"
        >
          <FaLinkedin className="text-2xl transition-all duration-200 ease-in-out hover:text-teal-400 hover:scale-110 text-slate-200" />
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=https://lostindusk.com/blog/${id}`}
          target="_blank"
        >
          <FaFacebook className="text-2xl transition-all duration-200 ease-in-out hover:text-teal-400 hover:scale-110 text-slate-200" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=https://lostindusk.com/blog/${id}`}
          target="_blank"
        >
          <FaTwitter className="text-2xl transition-all duration-200 ease-in-out hover:text-teal-400 hover:scale-110 text-slate-200" />
        </a>
      </div>
    </div>
  );
};

export default Share;
