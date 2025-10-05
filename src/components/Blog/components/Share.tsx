import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

interface IShare {
  id: number;
}

const SHARE_OPTIONS = [
  {
    getHref: (id: number) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=https://lostindusk.com/blog/${id}`,
    icon: FaLinkedin,
  },
  {
    getHref: (id: number) =>
      `https://www.facebook.com/sharer.php?u=https://lostindusk.com/blog/${id}`,
    icon: FaFacebook,
  },
  {
    getHref: (id: number) =>
      `https://twitter.com/intent/tweet?url=https://lostindusk.com/blog/${id}`,
    icon: FaTwitter,
  },
];

const Share = ({ id }: IShare) => {
  return (
    <div className="mt-8">
      <div className="font-bold">Share this post on:</div>
      <div className="flex py-2 space-x-4">
        {SHARE_OPTIONS.map((option) => {
          const Icon = option.icon;
          return (
            <a
              href={option.getHref(id)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-7 h-7 transition-all duration-200 ease-in-out hover:scale-110 text-slate-200 hover:text-primary" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Share;
