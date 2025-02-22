import { Stack } from "@chakra-ui/react";
import { Connections, Heading3 } from "@/components";
import { INFO } from "@/config/data/about";

const Info = () => {
  return (
    <Stack maxW={"30rem"} overflowX={"auto"} gap={2} px={2}>
      <Heading3>Info</Heading3>
      <div className="flex gap-10 items-start pb-3 animate-textFocus">
        <img
          src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Aidan"
          alt="profile"
          className="w-20 h-20 rounded transition-all duration-200 ease-in hover:scale-110 hover:brightness-110"
        />
        <div>
          {Object.entries(INFO).map(([key, value]) => (
            <div key={key} className="flex space-x-4 max-w-[40vw]">
              <h4 className="text-base font-semibold min-w-[6rem]">{key}</h4>
              <div>{value}</div>
            </div>
          ))}
          <Connections />
        </div>
      </div>
    </Stack>
  );
};

export default Info;
