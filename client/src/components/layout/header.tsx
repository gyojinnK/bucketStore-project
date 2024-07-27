import Logo from "./logo";

const Header = () => {
  return (
    <div className="h-20 flex justify-between items-center bg-black sticky">
      <Logo className="p-6" />
      <a href="https://github.com/gyojinnK">
        <span className="text-2xl font-medium text-white p-6">
          Frontend Developer{" "}
          <p className="inline-block text-orange-400 font-bold text-2xl">
            강교진
          </p>
        </span>
      </a>
    </div>
  );
};

export default Header;
