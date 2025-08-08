import { RevealOnScroll } from "../RevealOnScroll";
import { SectionTitle } from "./common";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#e1144c] to-pink-700 bg-clip-text text-transparent text-center">
            My Babies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              name={"Interactive Book"}
              discription={
                "I led the development of an Arduino-based system and software for an audiovisual interactive book."
              }
              skills={[
                "C++",
                "Arduino",
                "UI UX design",
                "Adobe Photoshop",
                "Graphic Design",
              ]}
            />
            <Project
              name={"Unity 2d Game"}
              discription={
                "Small 2d game created in unity. I redesigned the visuals and code to the game (using C#). with additional fun features."
              }
              skills={["Unity", "C#", "Illustration", "Procreate"]}
            />
            <Project
              name={"Ticket shop API"}
              discription={
                "maintaining a flask application focused on SQL querying and api"
              }
              skills={["Flask API", "Python", "sqlalchemy ", "Unit text"]}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const Project = ({ name, discription, skills, link }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-700/30 hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{discription}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((tech, key) => (
          <span
            key={key}
            className="bg-pink-700/10 text-pink-700 py-1 px-3 rounded-full text-sm hover:bg-[#e1144c]/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <div className="flex justify-center items-center mt-4">
          {" "}
          <a
            href={link}
            className="hover:text-pink-700 border py-1 px-4 rounded font-medium transition-all duration-200 text-gray-400 hover:border hover:border-pink-700 transition-colors cursor-pointer"
          >
            View project
          </a>
        </div>
      )}
    </div>
  );
};
