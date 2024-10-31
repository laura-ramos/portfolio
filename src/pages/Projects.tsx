import image from "../assets/dev.png";
import { PROJECTS } from "../data/data";

function Projects() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
      <h3 className="text-6xl font-bold text-center">Projects</h3>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {PROJECTS.map((item, index) => (
            <div className="relative group portfolio overflow-hidden">
              <img src={item.image} alt="Imagen" className="w-full h-auto" />
              <div className="absolute inset-0 p-2 bg-primary bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="absolute bottom-4 inline-block text-center inset-x-0 text-4xl font-bold">{item.title}</h2>
              </div>
            </div>
          ))}

        </div>


      </div>
    </>
  );
}

export default Projects;
