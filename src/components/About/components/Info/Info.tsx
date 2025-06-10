import { Heading3 } from "@/components";
import { Connections } from ".";
import { INFO, INFO_ICONS } from "../../config/data";
import profile from "@/assets/ghibli_avatar.png";

const Info = () => {
  return (
    <div className="flex overflow-auto flex-col gap-2 animate-text-focus sm:max-w-[40rem]">
      <Heading3>Info</Heading3>
      <div className="flex gap-4 justify-between items-start sm:py-4 animate-text-focus">
        <img
          src={profile}
          alt="profile"
          className="hidden mx-3 w-40 h-40 rounded-full transition-all duration-200 ease-in-out sm:block hover:ring-2 hover:scale-110 ring-primary"
        />
        <div className="flex justify-between space-x-4 sm:flex-col sm:w-max w-dvw">
          <div>
            {Object.entries(INFO).map(([key, value]) => {
              const Icon = INFO_ICONS[key as keyof typeof INFO_ICONS];
              return (
                <div key={key} className="flex space-x-4 sm:max-w-[40vw]">
                  <div className="flex items-center space-x-2 h-6">
                    <Icon />
                    <div className="hidden font-semibold lg:block min-w-[6rem]">
                      {key}
                    </div>
                  </div>
                  <div>{value}</div>
                </div>
              );
            })}
          </div>
          <Connections />
        </div>
      </div>
    </div>
  );
};

export default Info;
