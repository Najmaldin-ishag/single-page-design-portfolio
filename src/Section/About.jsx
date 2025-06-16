import Button from "../Components/button";

const About = () => {
  return (
    <section className="container p-10 max-w-[69.375rem] mt-[7.5rem]">
      <article className="flex justify-between items-center  gap-[7.5rem] max-sm:flex-col">
        <img
          src="./assets/image-amy.webp"
          className="max-w-[27.8125rem] max-sm:w-full"
          alt="amy picture"
        />
        <div>
          <h2 className="text-[2.5rem] font-[700]  leading-[130%] mb-[2rem]">
            I’m Amy, and I’d love to <br /> work on your next project
          </h2>
          <p className="text-[1.125rem] font-[500] leading-[150%] mb-[2rem]">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <Button
            className="bg-light-red-500 flex cursor-pointer justify-center items-center px-[3.75rem] rounded-full py-[1rem] text-white"
            title="Free Consultation"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
