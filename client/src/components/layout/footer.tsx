import { GitHubLogoIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import FooterTopBorder from "./footer-border-top";

const Footer = () => {
  return (
    <>
      <FooterTopBorder />
      <div className="bg-black flex justify-between items-center">
        <div className="text-5xl text-white p-6">
          <p>Frontend Developer </p>
          <span className="">
            문제를
            <p className="inline-block text-orange-400 p-1">해결</p>하고 <br />
            <p className="inline-block text-orange-400">정의</p>합니다.
          </span>
        </div>
        <div className="p-6">
          <p className="text-4xl pb-4 text-white text-right">강교진</p>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex items-center">
              <GitHubLogoIcon width={24} height={24} color="white" />
              <p className="text-lg px-2 font-medium">Github</p>
            </div>
            <div className="flex items-center">
              <NotionLogoIcon width={24} height={24} color="white" />
              <p className="text-lg px-2 font-medium">Notion</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
