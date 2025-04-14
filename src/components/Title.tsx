import lostInDuskLogo from "../../public/lost_in_dusk_logo.png";
interface TitleProps {
  mr?: boolean;
  ml?: boolean;
}

const Title = ({ mr = false, ml = false }: TitleProps) => {
  return (
    <div
      className={`${mr && "mr-auto"} ${ml && "ml-auto"} animate-text-focus z-10 py-2 text-lg font-semibold text-nowrap select-none`}
    >
      <img
        src={lostInDuskLogo}
        alt="Lost In Dusk Logo"
        className="inline-block mr-2 w-12 h-12"
      />
      <span className="ml-2 text-white">LostInDusk</span>
    </div>
  );
};

export default Title;
