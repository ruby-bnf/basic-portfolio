import { RevealOnScroll } from "../RevealOnScroll";
import { SectionTitle, SkillItem } from "../common";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle>About Me</SectionTitle>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a front-end developer, designer, and artist - which is a fancy
              way of saying I like making things look good and work well.{" "}
            </p>
            <Skills />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Education />
            <WorkExpirience />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const Skills = () => {
  const frontEndSkills = [
    "React",
    "TypeScript",
    "Tailwind",
    "JavaScript",
    "C#",
    "CSS",
    "HTML",
  ];

  const backEndSkills = ["Python", "C", "C++", "Java", "Scala"];
  const uxuiDesign = [
    "Adobe Suit",
    "Procreate",
    "User research",
    "prototyping",
    "Illustration",
    "Animation",
    "3D modeling",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SkillsList name={"Front end"} skills={frontEndSkills} />
      <SkillsList name={"Back end"} skills={backEndSkills} />
      <SkillsList name={"UX UI & Design"} skills={uxuiDesign} />
    </div>
  );
};

const SubTitle = ({ children }) => {
  return <h3 className="text-xl font-bold mb-4">{children}</h3>;
};

const SkillsList = ({ name, skills }) => {
  return (
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
      <SubTitle>{name}</SubTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((tech, index) => (
          <SkillItem key={index}>{tech}</SkillItem>
        ))}
      </div>
    </div>
  );
};

const ListItem = ({ title, description, date }) => {
  return (
    <li>
      <span className="text-pink-700 font-semibold mb-1">
        {`${title} (${date[0]} - ${date[1]})`}
      </span>{" "}
      <p className="description whitespace-pre-line text-gray-400 text-sm mb-6">
        {description}
      </p>
    </li>
  );
};

const Education = () => {
  return (
    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
      <SubTitle>Education</SubTitle>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <ListItem
          description={"Vrije Universiteit Amsterdam"}
          date={["2017", "2022"]}
          title={"B.S. in computer Science"}
        />

        <ListItem
          title={"Design and Illustration Study"}
          date={["2022", "2024"]}
          description={"Willem de Kooning Academie"}
        />
      </ul>
    </div>
  );
};

const WorkExpirience = () => {
  return (
    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
      <SubTitle>Work Experience</SubTitle>

      <div className="space-y-4 text-gray-100 mb-4">
        <ul className="list-inside text-gray-300 space-y-2">
          <ListItem
            title={"Software engineer at Mendix"}
            date={["2025", "Present"]}
            description={
              "AI - Maintenance and development of the Artificial Intelligence. \nUser experience - Maintenance and improvement of the front-end (UX/UI)."
            }
          />
          <ListItem
            title={"Teaching Assistant at Vrije Universiteit Amsterdam "}
            date={["2018", "2022"]}
            description={
              "Teaching and mentoring in University-level computer science courses such as advanced Programming, operating systems and Computer Networks."
            }
          />
        </ul>
      </div>
    </div>
  );
};
