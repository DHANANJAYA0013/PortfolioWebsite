import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Dart', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'C', level: 70 },
      ],
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'React', level: 80 },
        { name: 'Flutter', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Flask', level: 75 },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'Firebase', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'SQLite', level: 75 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Visual Studio Code', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
