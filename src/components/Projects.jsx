import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Serve Hub – Home Service Booking App',
      description:
        'Flutter-based home service app with 6+ service categories and role-based UI for customers and providers. Integrated with Firebase for real-time data synchronization.',
      technologies: ['Flutter', 'Firebase'],
      github: 'https://github.com/DHANANJAYA0013/ServeHub',
    },
    {
      title: 'Library Management System',
      description:
        'Built using Python, Django, and MySQL to manage book check-outs, returns, and overdue reminders. Includes search functionality and librarian-friendly interface.',
      technologies: ['Python', 'Django', 'MySQL'],
      github: 'https://github.com/DHANANJAYA0013/LMSDjango',
    },
    {
      title: 'Profile Finder',
      description:
        'A Django-based web app that fetches and displays GitHub user profiles with repositories, followers, and activity using GitHub\'s API.',
      technologies: ['Python', 'Django', 'GitHub API'],
      github: 'https://github.com/DHANANJAYA0013/Profile-Finder',
    },
    {
      title: 'Portfolio Website',
      description:
        'A fully responsive personal portfolio built with React and Vite. Features smooth animations, project showcase, contact form with EmailJS integration, and modern UI design.',
      technologies: ['React', 'Vite', 'CSS3', 'EmailJS'],
      github: 'https://github.com/DHANANJAYA0013/Portfolio1',
    },
    {
      title: 'Employee Management System',
      description:
        'Developed with Python, Django, and SQLite. Features intuitive admin dashboard for tracking employee records and generating reports.',
      technologies: ['Python', 'Django', 'SQLite'],
      github: 'https://github.com/DHANANJAYA0013/EMSDjango',
    },
    {
      title: 'GameZone – Gaming Website',
      description:
        'A gaming platform built with HTML, CSS, Python (Flask), and SQLite. Users can browse, play, rate, and review dozens of games.',
      technologies: ['HTML', 'CSS', 'Flask', 'SQLite'],
      github: 'https://github.com/DHANANJAYA0013/GameZone1',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2><br />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
