import Logo from "./logo";
import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="bg-black sticky top-0 left-0 z-10">
      <div className="px-6 h-24 flex justify-between items-center max-w-[1920px] m-auto">
        <div className="h-20 flex gap-4 max-[1399px]:flex-col max-[1399px]:gap-0 max-[1399px]:justify-center max-[1399px]:items-start items-center">
          <Logo className="" />
          <a href="https://github.com/gyojinnK">
            <span className="text-lg font-medium text-white ">
              Frontend Developer{" "}
              <p className="inline-block text-orange-400 font-bold ">강교진</p>
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/gyojinnK"
            target="_blank"
            className="p-[6px] hover:bg-orange-500 rounded-full transition-colors"
          >
            <GitHubLogoIcon width={32} height={32} color="white" />
          </a>
          <a
            href="https://gyojinnk.notion.site/e6489e4ae2a24083b2fcd9c7382a2af3?pvs=4"
            target="_blank"
            className="p-[6px] hover:bg-orange-500 rounded-full transition"
          >
            <NotionLogoIcon width={32} height={32} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
