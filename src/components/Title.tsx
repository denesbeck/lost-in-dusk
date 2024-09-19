interface TitleProps {
  mr?: boolean;
  ml?: boolean;
}

const Title = ({ mr = false, ml = false }: TitleProps) => {
  return (
    <div
      className={`${mr && "mr-auto"} ${ml && "ml-auto"} z-10 animate-textFocus py-2 text-lg font-semibold`}
    >
      LostInDusk
    </div>
  );
};

export default Title;
