import Button from "../Components/button";

const Footer = () => {
  return (
    <footer className="container">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-between px-[5rem] py-[4rem] max-sm:px-[2.5rem]  items-center bg-neutral-900">
        <div>
          <h2 className="text-[2.5rem] text-white font-[700] leading-[130%] max-sm:text-[2rem] max-sm:text-center">
            Book a call with me
          </h2>
          <p className="text-[1.125rem] text-white mt-[1.5rem] font-[400] leading-[150%] max-sm:text-center max-sm:mb-[1rem]">
            I'd love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <Button
          className="bg-light-red-500 justify-self-end px-[4rem] max-sm:px-[2rem] max-sm:justify-self-center cursor-pointer rounded-full py-[1.3rem] text-[1rem] font-[700] leading-[150%] text-white"
          title="Free Consultation"
        />
      </div>
      <nav className="flex justify-between mt-[3.5rem] mb-[1rem] ">
        <a href="/">
          <img src="./assets/logo.svg" alt="logo" />
        </a>
        <Button
          className="bg-neutral-900 px-15 cursor-pointer max-sm:px-5 max-sm:py-1 rounded-full py-2 text-[1rem] font-[700] leading-[150%] text-white"
          title="Free Consultation"
        />
      </nav>
    </footer>
  );
};

export default Footer;
