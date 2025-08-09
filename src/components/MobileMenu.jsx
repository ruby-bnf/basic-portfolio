export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleClose = () => setMenuOpen(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <MobileMenuItem
        label="Home"
        href="#home"
        onClick={handleClose}
        menuOpen={menuOpen}
      />
      <MobileMenuItem
        label="About"
        href="#about"
        onClick={handleClose}
        menuOpen={menuOpen}
      />
      <MobileMenuItem
        label="Projects"
        href="#projects"
        onClick={handleClose}
        menuOpen={menuOpen}
      />
      <MobileMenuItem
        label="Contact"
        href="#contact"
        onClick={handleClose}
        menuOpen={menuOpen}
      />
    </div>
  );
};

const MobileMenuItem = ({ label, href, onClick, menuOpen }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-3xl description font-semibold text-gray-200 my-7 transform transition-transform duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      {label}
    </a>
  );
};
