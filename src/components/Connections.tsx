import { Social } from "@/components";
import { CONNECTIONS } from "@/config/data/about";

const Connections = () => {
  return (
    <div className="mt-4 flex w-full max-w-[40vw] items-center justify-start space-x-4">
      {CONNECTIONS.map(({ url, icon }) => (
        <Social key={url} url={url} icon={icon} />
      ))}
    </div>
  );
};

export default Connections;
