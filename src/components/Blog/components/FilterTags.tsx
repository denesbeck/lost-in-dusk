import { Badge, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { IoSettingsSharp, IoCheckmarkSharp, IoClose } from "react-icons/io5";
import { LiaBroomSolid } from "react-icons/lia";
import BLOG_ENTRIES from "../config/data";
import DarkLayout from "@/components/DarkLayout";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterTags = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const tags = searchParams.getAll("tag");
  const [selection, setSelection] = useState<string[]>(tags);
  const allTags = Array.from([
    ...new Set(BLOG_ENTRIES.map((el) => el.tags).flat()),
  ]).sort();
  const navigate = useNavigate();

  const handleSelect = (tag: string) => {
    if (selection.includes(tag)) {
      setSelection((prev) => prev.filter((el) => el !== tag));
    } else {
      setSelection((prev) => [...prev, tag]);
    }
  };

  const handleApply = () => {
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

  const handleClear = () => {
    setSelection([]);
    navigate({
      pathname: "/blog",
      search: "",
    });

    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-end py-2 px-6 animate-text-focus">
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
              <Tooltip arrow placement="bottom" title="Clear">
                <IconButton onClick={handleClear}>
                  <LiaBroomSolid className="text-3xl text-white" />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="bottom" title="Close">
                <IconButton onClick={handleCancel}>
                  <IoClose className="text-3xl text-white" />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="bottom" title="Apply">
                <IconButton onClick={handleApply}>
                  <IoCheckmarkSharp className="text-3xl text-primary" />
                </IconButton>
              </Tooltip>
            </div>

            <div className="flex overflow-auto flex-wrap gap-8 justify-center items-center p-4 animate-text-focus max-h-[80dvh] max-w-[50rem]">
              {[...allTags].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSelect(tag)}
                  className={`text-2xl ${tags.includes(tag) ? "text-primary scale-110" : "text-gray-200"} cursor-pointer transition-all duration-200 ease-in-out hover:scale-110`}
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
