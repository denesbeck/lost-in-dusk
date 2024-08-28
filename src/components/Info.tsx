import { Stack } from "@chakra-ui/react";
import { Avatar, Connections, Heading2 } from "@/components";
import { INFO } from "@/config/data/about";

const Info = () => {
  return (
    <Stack maxW={"26rem"} overflowX={"auto"} gap={8} px={2}>
      <Heading2 content="Info" />
      <div className="flex gap-8 px-1 pb-3 animate-textFocus">
        <Avatar />
        <div>
          {Object.entries(INFO).map(([key, value]) => (
            <div key={key} className="flex space-x-4 max-w-[40vw]">
              <h4 className="font-semibold min-w-[6rem]">{key}</h4>
              <div className="whitespace-nowrap">{value}</div>
            </div>
          ))}
          <Connections />
        </div>
      </div>
    </Stack>
  );
};

export default Info;
