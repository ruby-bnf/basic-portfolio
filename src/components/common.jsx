export const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e1144c] to-pink-700 bg-clip-text text-transparent text-center">
      {children}{" "}
    </h2>
  );
};

export const SkillItem = ({ children }) => {
  return (
    <span className="bg-pink-700/10 text-pink-700 py-1 px-3 rounded-full text-sm hover:bg-[#e1144c]/20  transition">
      {children}
    </span>
  );
};

export const PrimaryButton = ({
  children,
  navTo,
  onClick,
  className,
  onSubmit,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (onSubmit) {
      const form = e.currentTarget.closest("form");
      if (currentTarget.closest("form") && form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <a
      href={navTo}
      onClick={handleClick}
      className={`cursor-pointer bg-[#e1144c] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(202,76,30,0.4)] ${className}`}
    >
      {children}
    </a>
  );
};

export const SecondaryButton = ({
  children,
  navTo,
  onClick,
  className,
  onSubmit,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (onSubmit) {
      const form = e.currentTarget.closest("form");
      if (currentTarget.closest("form") && form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <a
      href={navTo}
      onClick={handleClick}
      className={`cursor-pointer border border-[#e1144c]/60 text-[#e1144c] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(202,76,30,0.1)] hover:bg-[#e1144c]/50 hover:text-white ${className}`}
    >
      {children}
    </a>
  );
};

export const TertiaryButton = ({
  children,
  navTo,
  onClick,
  className = "",
  onSubmit,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (onSubmit) {
      const form = e.currentTarget.closest("form");
      if (currentTarget.closest("form") && form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <a
      href={navTo}
      onClick={handleClick}
      className={`cursor-pointer hover:text-pink-700 border py-1 px-3 rounded text-sm font-medium transition-all duration-200 text-gray-400 hover:border-pink-700 ${className}`}
    >
      {children}
    </a>
  );
};
