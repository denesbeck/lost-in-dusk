import { Connections, Heading3 } from "@/components";
import { INFO, INFO_ICONS } from "@/config/about";
import profile from "@/assets/ghibli_avatar.png";

const Info = () => {
  return (
    <div className="flex overflow-hidden flex-col gap-2 pr-2 animate-text-focus max-w-[34rem]">
      <Heading3>Info</Heading3>
      <div className="flex gap-4 items-start py-2 animate-text-focus">
        <img
          src={profile}
          alt="profile"
          className="mx-2 w-40 h-40 rounded-full transition-all duration-200 ease-in hover:scale-110"
        />
        <div>
          {Object.entries(INFO).map(([key, value]) => {
            const Icon = INFO_ICONS[key as keyof typeof INFO_ICONS];
            return (
              <div key={key} className="flex space-x-4 max-w-[40vw]">
                <div className="flex items-center space-x-2 h-6">
                  <Icon />
                  <div className="hidden text-base font-semibold text-white lg:block min-w-[6rem]">
                    {key}
                  </div>
                </div>
                <div>{value}</div>
              </div>
            );
          })}
          <Connections />
        </div>
      </div>
    </div>
  );
};

export default Info;
