interface MacOSBarProps {
  close?: () => void;
}
const MacOSBar = ({ close }: MacOSBarProps) => {
  return (
    <div className="flex justify-start items-center py-4 px-2 w-full">
      <button
        className="flex space-x-2 cursor-pointer"
        onClick={close || (() => { })}
      >
        <div className="w-4 h-4 rounded-full bg-macos-red" />
        <div className="w-4 h-4 rounded-full bg-macos-yellow" />
        <div className="w-4 h-4 rounded-full bg-macos-green" />
      </button>
    </div>
  );
};

export default MacOSBar;
