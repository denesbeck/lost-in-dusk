import { BlogEntry } from "@/interfaces/blog";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogCard = ({ id, title, description, date }: BlogEntry) => (
  <div className="group relative w-[20rem] max-w-[75vw] animate-textFocus cursor-pointer space-y-2 rounded-md px-6 py-4 ring-2 ring-teal-500 ring-offset-gray-900 transition-all duration-200 ease-in-out hover:ring-offset-4">
    <div className="absolute -top-3.5 left-4 bg-slate-900 px-2 text-base transition-all duration-200 ease-in-out group-hover:-top-4 group-hover:font-bold">
      {title}
    </div>
    <p className="text-sm">{description}</p>
    <p className="text-sm">{date}</p>
  </div>
);

export default BlogCard;
