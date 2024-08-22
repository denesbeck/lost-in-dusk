import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";

function Avatar() {
  const avatar = useMemo(() => {
    return createAvatar(bottts, {
      size: 90,
      baseColor: ["546e7a"],
      eyes: ["frame2"],
      face: ["round01"],
      mouth: ["diagram"],
      sides: ["antenna02"],
      top: ["bulb01"],
    }).toDataUri();
  }, []);

  return (
    <img
      className="h-[90px] w-[90px] rounded-full p-2 ring-slate-700 transition-all duration-200 ease-in hover:bg-slate-800 hover:ring-2"
      src={avatar}
      alt="Avatar"
    />
  );
}

export default Avatar;
