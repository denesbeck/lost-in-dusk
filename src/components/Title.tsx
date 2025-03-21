interface TitleProps {
  mr?: boolean;
  ml?: boolean;
}

const Title = ({ mr = false, ml = false }: TitleProps) => {
  return (
    <div
      className={`${mr && "mr-auto"} ${ml && "ml-auto"} animate-text-focus z-10 py-2 text-lg font-semibold select-none`}
    >
      LostInDusk
    </div>
  );
};

export default Title;
