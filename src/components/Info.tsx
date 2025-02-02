import { Stack } from "@chakra-ui/react";
import { Connections, Heading3 } from "@/components";
import { INFO } from "@/config/data/about";
import profile from "@/assets/profile.jpeg";

const Info = () => {
  return (
    <Stack maxW={"30rem"} overflowX={"auto"} gap={2} px={2}>
      <Heading3>Info</Heading3>
      <div className="flex gap-10 items-center pb-3 animate-textFocus">
        <img
          src={profile}
          alt="profile"
          className="w-32 h-32 rounded-full ring-2 transition-all duration-200 ease-in hover:scale-110 ring-slate-200 hover:brightness-110"
        />
        <div>
          {Object.entries(INFO).map(([key, value]) => (
            <div key={key} className="flex space-x-4 max-w-[40vw]">
              <h4 className="text-base font-semibold min-w-[6rem]">{key}</h4>
              <div >{value}</div>
            </div>
          ))}
          <Connections />
        </div>
      </div>
    </Stack>
  );
};

export default Info;
