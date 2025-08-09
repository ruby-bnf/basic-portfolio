import { RevealOnScroll } from "../RevealOnScroll";
import { PrimaryButton, SecondaryButton } from "../common";
import "../../Index.css";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-700 bg-clip-text leading-right text-transparent">
            Hi, I'm Ruby Barner Fontyn
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a front-end developer, designer, and artist - which is a fancy
            way of saying I like making things look good and work well. I enjoy
            building creative solutions that bring design and functionality
            together.
          </p>
          <div className="flex justify-center space-x-4">
            <PrimaryButton navTo={"#projects"}>View Projects</PrimaryButton>
            <SecondaryButton navTo={"#contact"}>Contact Me</SecondaryButton>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
