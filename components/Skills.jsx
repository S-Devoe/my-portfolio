import skills from "../data/skills";
import CodingLottie from "./CodingLottie";

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills_headline">Skills / Languages</h2>
      <div className="skill_content">
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className="sk">
                <div className="skill_image">
                  {/* eslint-disable-next-line */}
                  <img src={skill.image} alt={skill.name} />
                </div>
              </div>
              <h3 className="skill_name">{skill.name}</h3>
            </li>
          ))}
        </ul>


      </div>
    </section>
  );
};
export default Skills;
