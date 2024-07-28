import FooterTopBorder from "./footer-border-top";

const Footer = () => {
  return (
    <>
      <FooterTopBorder />
      <div className="bg-black ">
        <div className="flex justify-between items-center max-w-[1920px] m-auto">
          <div className="text-5xl text-white px-6 py-12">
            <p>Frontend Developer </p>
            <span className="">
              문제를
              <p className="inline-block text-orange-400 p-1">해결</p>하고{" "}
              <br />
              <p className="inline-block text-orange-400">정의</p>합니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
