import Button from "../Components/button";

const Footer = () => {
  return (
    <footer className="container">
      <div className="grid grid-cols-2 justify-between px-[5rem] py-[4rem] items-center bg-neutral-900">
        <div>
          <h2 className="text-[2.5rem] text-white font-[700] leading-[130%]">
            Book a call with me
          </h2>
          <p className="text-[1.125rem] text-white mt-[1.5rem] font-[400] leading-[150%]">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <Button
          className="bg-light-red-500 justify-self-end px-[4rem] cursor-pointer rounded-full py-[1.3rem] text-[1rem] font-[700] leading-[150%] text-white"
          title="Free Consultation"
        />
      </div>
      <nav className="flex justify-between mt-[3.5rem] mb-[1rem]">
        <img src="./assets/logo.svg" alt="logo" />
        <Button
          className="bg-neutral-900 px-15 cursor-pointer rounded-full py-2 text-[1rem] font-[700] leading-[150%] text-white"
          title="Free Consultation"
        />
      </nav>
    </footer>
  );
};

export default Footer;
