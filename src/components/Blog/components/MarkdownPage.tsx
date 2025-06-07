import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import { MarkdownLoading } from ".";

interface IMarkdownPage {
  markdownFile: string;
}

const MarkdownPage = ({ markdownFile }: IMarkdownPage) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(markdownFile)
      .then((res) => res.text())
      .then(setMarkdown)
      .finally(() => setLoading(false));
  }, [markdownFile]);

  return (
    <article className="prose prose-img:mx-auto prose-img:px-12 prose-a:text-blue-400 h-dvh w-[50rem] max-w-[50rem] dark:prose-invert">
      {loading ? (
        <MarkdownLoading />
      ) : (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      )}
    </article>
  );
};

export default MarkdownPage;
