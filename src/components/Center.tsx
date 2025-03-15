interface ICenter {
  children: React.ReactNode;
  py?: number;
  gap?: number;
}

const Center = ({ children, py = 0, gap = 0 }: ICenter) => {
  return (
    <div className={`flex flex-col py-${py} gap-${gap} items-center`}>
      {children}
    </div>
  );
};

export default Center;
