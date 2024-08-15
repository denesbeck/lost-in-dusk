interface BlogEntryCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
}

const BlogEntryCard = ({
  id,
  title,
  description,
  date,
}: BlogEntryCardProps) => (
  <div className="w-[20rem] -skew-x-6 animate-textFocus cursor-pointer space-y-2 bg-slate-700 px-6 py-4 shadow-[12px_12px_black,-12px_-12px_#14b8a6] transition-all duration-200 ease-in-out hover:scale-110 hover:backdrop-brightness-150">
    <div className="text-xl">{title}</div>
    <p className="text-sm">{description}</p>
    <p className="text-sm">{date}</p>
  </div>
);

export default BlogEntryCard;
