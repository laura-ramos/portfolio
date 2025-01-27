import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PROJECTS } from "../data/data";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <h3 className="text-6xl font-bold text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-5 grid-cols-1">
          {PROJECTS.map((item, index) => (
            <div
              key={index}
              className={`relative group portfolio overflow-hidden shadow-sm border ${index % 2 === 0 ? "animate-fade-right" : "animate-fade-left"
                } animate-delay-[6ms]`}
            >
              <img src={item.image} alt="Imagen" className="w-full h-auto" />
              <div className="flex absolute inset-0 p-2 bg-primary bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                <div className="text-center content-center w-full">
                  <a href={item.url} target="_blank">
                    <FontAwesomeIcon icon={faLink} size="2xl" />
                  </a>
                  <h2 className="text-4xl font-bold">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
