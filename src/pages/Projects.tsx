import { PROJECTS } from "../data/data";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-5 grid-cols-1">
          {PROJECTS.map((item, index) => (
            <div key={index} className="bg-base-100 shadow-xl h-fit border">
              <a href={item.url} target="_blank">
                <div
                  className={`relative group portfolio overflow-hidden shadow-sm`}
                >
                  <img
                    src={item.image}
                    alt="Imagen"
                    className="w-full max-h-64 object-cover transition duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p>{item.description}</p>
                  <p>
                    {item.skills.map((skill, i) => (
                      <div key={i} className="badge badge-dash badge-primary">{skill}</div>  
                    ))}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
