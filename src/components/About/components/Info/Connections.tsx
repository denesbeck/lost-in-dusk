import { Social } from ".";
import { CONNECTIONS } from "../../config/data";

const Connections = () => {
  return (
    <div className="flex justify-start items-center mt-4 space-x-5 w-full max-w-[40vw]">
      {CONNECTIONS.map(({ url, icon }) => (
        <Social key={url} url={url} icon={icon} />
      ))}
    </div>
  );
};

export default Connections;
