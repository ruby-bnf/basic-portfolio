export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-700 bg-clip-text leading-right text-transparent">
          Hi, I'm Ruby Barner Fontyn
        </h1>
        <p className="text-grey-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a front-end developer, designer, and artist - which is a fancy way
          of saying I like making things look good and work well. I enjoy
          building creative solutions that bring design and functionality
          together.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-[#e1144c] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(202,76,30,0.4)]"
          >
            View Projects
          </a>

          <a
            href="#projects"
            className="border border-[#e1144c]/60 text-[#e1144c] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(202,76,30,0.1)] hover:bg-[#e1144c]/50 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
