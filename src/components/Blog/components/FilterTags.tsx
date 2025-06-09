import { Badge, IconButton } from "@mui/material";
import { useState } from "react";
import { IoSettingsSharp, IoCheckmarkSharp, IoClose } from "react-icons/io5";
import BLOG_ENTRIES from "../config/data";
import DarkLayout from "@/components/DarkLayout";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterTags = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);
  const allTags = Array.from([
    ...new Set(BLOG_ENTRIES.map((el) => el.tags).flat()),
  ]).sort();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tags = searchParams.getAll("tag");

  const handleSelect = (tag: string) => {
    if (selection.includes(tag)) {
      setSelection((prev) => prev.filter((el) => el !== tag));
    } else {
      setSelection((prev) => [...prev, tag]);
    }
  };

  const handleSave = () => {
    navigate({
      pathname: "/blog",
      search: `?${selection.map((tag) => `tag=${tag}`).join("&")}`,
    });
    setIsOpen(false);
  };

  const handleCancel = () => {
    setSelection(tags);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-end py-2 px-8 animate-text-focus">
        <Badge badgeContent={tags.length} color="primary">
          <IconButton onClick={() => setIsOpen(true)}>
            <IoSettingsSharp className="text-white" />
          </IconButton>
        </Badge>
      </div>
      {isOpen && (
        <DarkLayout>
          <>
            <div className="flex absolute top-2 right-2 gap-4">
              <IconButton
                className="ring-blue-400 hover:ring-2"
                onClick={handleCancel}
              >
                <IoClose className="text-3xl text-white" />
              </IconButton>
              <IconButton
                className="ring-blue-400 hover:ring-2"
                onClick={handleSave}
              >
                <IoCheckmarkSharp className="text-3xl text-teal-400" />
              </IconButton>
            </div>

            <div className="flex overflow-auto flex-wrap gap-8 justify-center items-center p-4 my-14 animate-text-focus max-h-[90dvh] max-w-[50rem]">
              {[...allTags].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSelect(tag)}
                  className={`text-3xl ${selection.includes(tag) ? "scale-110 text-teal-400" : "text-gray-300"} cursor-pointer transition-all duration-200 ease-in-out hover:scale-110`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </>
        </DarkLayout>
      )}
    </>
  );
};

export default FilterTags;
