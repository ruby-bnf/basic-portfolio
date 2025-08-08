import { RevealOnScroll } from "../RevealOnScroll";
import { SectionTitle, SkillItem, TertiaryButton } from "../common";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle>My Babies</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              name={"Interactive Book"}
              description={
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
              description={
                "Small 2d game created in unity. I redesigned the visuals and code to the game (using C#). with additional fun features."
              }
              skills={["Unity", "C#", "Illustration", "Procreate"]}
            />
            <Project
              name={"Ticket shop API"}
              description={
                "maintaining a flask application focused on SQL querying and api"
              }
              skills={["Flask API", "Python", "sqlalchemy", "Unit test"]}
              link={"plaveHolderehere!"}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const SubTitle = ({ children }) => {
  return <h3 className="text-xl font-bold mb-2">{children}</h3>;
};

const Project = ({ name, description, skills, link }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-700/30 hover:shadow-[0_2px_8px_rgba(236,72,153,0.1)] transition">
      <SubTitle>{name}</SubTitle>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((tech, key) => (
          <SkillItem key={key}>{tech}</SkillItem>
        ))}
      </div>
      {link && (
        <div className="flex justify-end items-center mt-8">
          <TertiaryButton navTo={link}>View project</TertiaryButton>
        </div>
      )}
    </div>
  );
};
