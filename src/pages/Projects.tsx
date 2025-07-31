import { ProjectItem } from "../componets/ProjectItem";
import { PROJECTS } from "../data/data";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-5 grid-cols-1">
          {PROJECTS.map((item, index) => (
            <ProjectItem key={index} 
              title={item.title}
              url={item.url}
              image={item.image}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </div>
      </section>
    </>
  );
};
