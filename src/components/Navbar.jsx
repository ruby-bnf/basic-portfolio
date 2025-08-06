import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b borfer-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a herf="#home" className="font-mono text-xl font-bold text-white">
            ruby<span className="text-orange-600">.bnf</span>
            {""}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              herf="#home"
              className="text-grey-300 hover:text-white transition-colors"
            >
              Home
            </a>

            <a
              herf="#about"
              className="text-grey-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              herf="#projects"
              className="text-grey-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              herf="#contact"
              className="text-grey-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
