import { ChevronUpIcon } from "@radix-ui/react-icons";

const ScrollTopButton = () => {
  return (
    <button
      className="fixed bottom-10 left-10 z-50"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="p-2 rounded-full bg-black/20">
        <ChevronUpIcon width={32} height={32} />
      </div>
    </button>
  );
};

export default ScrollTopButton;
