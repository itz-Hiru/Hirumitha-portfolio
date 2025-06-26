import { BACKEND_SKILLS, FRONTEND_SKILLS } from "../../utils/data.util";
import SKILLS_IMAGE from "../../assets/skills-image.png";

const Skills = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-5">
      <div className="w-full xl:w-1/2 flex">
        <img
          src={SKILLS_IMAGE}
          alt="about image"
          className="w-full h-full xl:h-108 object-cover xl:object-contain rounded-xl filter grayscale"
        />
      </div>
      <div className="w-full xl:w-1/2 flex flex-col items-center lg:items-start">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5">My Skills</h2>
        <p className="text-sm text-gray-700 mb-7 text-center lg:text-left">
          With 1 year of professional experience as a web developer, I’ve
          developed strong skills in creating responsive, user-friendly
          interfaces and building efficient backend systems. I’m comfortable
          working across the full development stack, using modern frameworks and
          tools to deliver clean, maintainable code. My approach combines
          technical proficiency with a focus on usability and performance,
          ensuring reliable and engaging web experiences.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col gap-5 bg-gray-300 px-4 py-6 rounded-md">
            {FRONTEND_SKILLS.map((skill, index) => (
              <div index={index} className="w-full flex items-center gap-4">
                <skill.icon className="text-4xl text-gray-800" />
                <div className="w-full flex flex-col gap-2 items-start group">
                  <h2 className="text-sm font-medium text-gray-800">{skill.name}</h2>
                  <div className="w-full relative h-1 bg-gray-400 rounded">
                    <div
                      className="h-full bg-gray-900 rounded relative"
                      style={{ width: `${skill.ability}%` }}
                    >
                      <div className="absolute -top-8 right-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-900 text-white text-xs px-2 py-1.5 rounded">
                        {skill.ability}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col gap-5 bg-gray-300 px-4 py-6 rounded-md">
            {BACKEND_SKILLS.map((skill, index) => (
              <div index={index} className="w-full flex items-center gap-4">
                <skill.icon className="text-4xl text-gray-800" />
                <div className="w-full flex flex-col gap-2 items-start group">
                  <h2 className="text-sm font-medium text-gray-800">{skill.name}</h2>
                  <div className="w-full relative h-1 bg-gray-400 rounded">
                    <div
                      className="h-full bg-gray-900 rounded relative"
                      style={{ width: `${skill.ability}%` }}
                    >
                      <div className="absolute -top-8 right-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-900 text-white text-xs px-2 py-1.5 rounded">
                        {skill.ability}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
