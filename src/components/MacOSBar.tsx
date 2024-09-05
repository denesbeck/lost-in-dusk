interface MacOSBarProps {
  close?: () => void;
}
const MacOSBar = ({ close }: MacOSBarProps) => {
  return (
    <div className="flex justify-start items-center py-4 px-2 w-full">
      <button className="flex space-x-2" onClick={close || (() => {})}>
        <div className="w-4 h-4 bg-red-400 rounded-full" />
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="w-4 h-4 bg-green-400 rounded-full" />
      </button>
    </div>
  );
};

export default MacOSBar;
