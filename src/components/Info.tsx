import { Stack } from "@chakra-ui/react";
import { Avatar, Connections, Heading2 } from "@/components";
import { INFO } from "@/config/data/about";

const Info = () => {
  return (
    <Stack maxW={"26rem"} overflowX={"auto"} gap={8}>
      <Heading2 content="Info" />
      <div className="flex animate-textFocus gap-8 px-1">
        <Avatar />
        <div>
          {Object.entries(INFO).map(([key, value]) => (
            <div key={key} className="flex max-w-[40vw] space-x-4">
              <h4 className="min-w-[6rem] font-semibold">{key}</h4>
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
