const ScrollToTop = () => {
  return (
    <button
      className="fixed right-8 bottom-8 p-2 text-white bg-gray-800 rounded-md opacity-70 animate-textFocus"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Scroll to top
    </button>
  );
};

export default ScrollToTop;
