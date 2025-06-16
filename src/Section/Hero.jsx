import Button from "../Components/button";

const Hero = () => {
  return (
    <header className="container p-5">
      <nav className="flex justify-between">
        <img src="./assets/logo.svg" alt="logo" />
        <Button
          className="bg-neutral-900 px-15 rounded-full py-2 text-[1rem] font-[700] leading-[150%] text-white"
          title="Free Consultation"
        />
      </nav>
      <h1 className="text-center text-[3.5rem] mt-[5rem] font-[700] leading-[130%] text-neutral-900">
        Design solutions made easy
      </h1>
      <p className="text-neutral-400 text-[1.125rem] mb-[5rem] font-normal text-center mt-8 line-clamp-3">
        With over ten years of experience in various design disciplines, I’m
        <br />
        your one-stop shop for your design needs.
      </p>
      <div className="grid grid-cols-6 grid-rows-2 gap-6 max-sm:grid-cols-1  ">
        <div className="bg-galactic-blue-500 p-6 rounded-sm max-w-[22.125rem] col-span-2 row-span-2 -span-1 flex flex-col justify-between">
          <img
            className="self-end max-w-[8rem] h-auto shrink-0 mb-8"
            src="./assets/pattern-graphic-design.svg"
            alt="img"
          />
          <span className="text-white  text-[1.5rem] font-[700] leading-[130%]">
            Graphic Design
          </span>
        </div>
        <div className="bg-summer-yellow-500 flex rounded-sm flex-col justify-between px-4 max-sm:justify-self-auto max-sm:px-[2.25rem]">
          <img
            className="self-end mt-2 size-[4rem]"
            src="./assets/pattern-ui-ux.svg"
            alt="img"
          />
          <span className="text-white  text-[1.5rem] font-[700] leading-[130%]">
            UI UX
          </span>
        </div>
        <div className="bg-pink-500  rounded-sm flex flex-col justify-between px-4 max-sm:h-[11.375rem] max-sm:px-[2.25rem]">
          <img
            className="self-end mt-2 size-[4rem]"
            src="./assets/pattern-apps.svg"
            alt="img"
          />
          <span className="text-white  text-[1.5rem] font-[700] leading-[130%]">
            Apps
          </span>
        </div>
        {/* <div className="">
          <img src="./assets/pattern-graphic-design.svg" alt="img" />
          <span>Graphic Design</span>
        </div> */}
        <div className="bg-cyan-500 rounded-sm col-span-2 row-span-1 flex flex-col justify-between p-2">
          <img
            src="./assets/pattern-photography.svg"
            alt="img"
            className="mt-2 w-[10rem] h-[4rem] self-end mr-2"
          />
          <span className="text-white text-[1.5rem] order-2   font-[700]  leading-[130%]">
            Photography
          </span>
        </div>
        <div className="bg-light-red-500 col-span-2 rounded-sm px-[1rem] py-[.8rem] flex justify-self-stretch  justify-between items-start ">
          <img
            className="justify-self-end w-[8rem] mt-2 h-[4rem]"
            src="./assets/pattern-illustrations.svg"
            alt="img"
          />
          <span className="text-white text-[1.5rem] self-end  -order-2 font-[700]  leading-[130%]">
            Illustrations
          </span>
        </div>
        <div className="bg-dark-purple-500 rounded-sm col-span-2 row-span-1 flex flex-col justify-between px-[1rem] py-[.8rem]">
          <img
            src="./assets/pattern-motion-graphics.svg"
            alt="img"
            className="mt-2 w-[8rem] h-[4rem] self-end mr-2"
          />
          <span className="text-white text-[1.5rem] order-2   font-[700]  leading-[130%]">
            Photography
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
