import { Heading3 } from "@/components";
import { BIO, BIO_START } from "../../config/data";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Modal } from ".";
import { useState } from "react";
import { Tooltip } from "@mui/material";

const Bio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex overflow-x-auto flex-col gap-2 px-2 animate-text-focus max-w-[30rem]">
        <Heading3>
          <div className="flex items-center space-x-3">
            <span>Bio</span>
            <Tooltip arrow placement="right" title="Show more">
              <button
                onClick={() => setIsOpen(true)}
                className="transition-all duration-200 ease-in-out cursor-pointer hover:scale-110 text-primary hover:brightness-125"
              >
                <FaMagnifyingGlass className="text-base text-primary" />
              </button>
            </Tooltip>
          </div>
        </Heading3>
        <div className="overflow-hidden break-words text-ellipsis">
          {BIO_START}
        </div>
      </div>
      {isOpen && <Modal close={() => setIsOpen(false)}>{BIO}</Modal>}
    </>
  );
};

export default Bio;
