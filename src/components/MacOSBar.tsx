interface MacOSBarProps {
  close?: () => void;
}
const MacOSBar = ({ close }: MacOSBarProps) => {
  return (
    <button
      onClick={close || (() => {})}
      className="flex justify-end items-center p-4 space-x-2 w-full"
    >
      <div className="w-4 h-4 bg-red-400 rounded-full" />
      <div className="w-4 h-4 bg-yellow-400 rounded-full" />
      <div className="w-4 h-4 bg-green-400 rounded-full" />
    </button>
  );
};

export default MacOSBar;
