import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPhp,
  DiMysql,
  DiNodejsSmall,
  DiSass,
  DiReact,
  DiJqueryLogo,
  DiBootstrap,
  DiMaterializecss,
  DiWordpress,
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "php", name: "PHP", icon: <DiPhp/> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "node", name: "NodeJS", icon: <DiNodejsSmall /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "jquery", name: "jQuery", icon: <DiJqueryLogo /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "materialize", name: "Materialize", icon: <DiMaterializecss /> },
  { id: "wordpress", name: "WordPress", icon: <DiWordpress /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;