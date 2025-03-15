import { Stack } from "@chakra-ui/react";
import { Connections, Heading3 } from "@/components";
import { INFO, INFO_ICONS } from "@/config/data/about";
import profile from "@/assets/profile.png";

const Info = () => {
  return (
    <Stack maxW={"30rem"} overflowX={"auto"} gap={2} px={2}>
      <Heading3>Info</Heading3>
      <div className="flex gap-2 items-start pb-3 animate-textFocus">
        <img
          src={profile}
          alt="profile"
          className="w-36 h-36 rounded transition-all duration-200 ease-in hover:scale-110"
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
                <div className="whitespace-nowrap">{value}</div>
              </div>
            );
          })}
          <Connections />
        </div>
      </div>
    </Stack>
  );
};

export default Info;
