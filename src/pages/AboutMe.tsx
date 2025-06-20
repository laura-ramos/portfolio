import image from "../assets/girl-dev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutMe = () => {
  return (
    <>
      <section id="home">
        <div className="hero animate-fade-right animate-delay-[3ms]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" content-center">
              <img src={image} className="rounded-lg shadow-2xl max-w-80" alt="Girl dev" />
            </div>
            <div>
              <h1 className="text-name text-4xl font-bold">Hi, I'm Laura!</h1>
              <p className="py-6 text-xl">
                Desarrollador web con experiencia en el diseño, desarrollo y mantenimiento de aplicaciones web completas,
                tanto en front-end como en back-end. Proactivo, orientado a resultados y con un fuerte compromiso con la 
                mejora continua y el aprendizaje de nuevas tecnologías.
              </p>
              <ul className="flex gap-4">
                <li>
                  <a
                    className="btn btn-circle btn-outline btn-primary text-neutral"
                    href="https://github.com/laura-ramos"
                    title="github"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-circle btn-outline btn-primary text-neutral"
                    href="https://mx.linkedin.com/in/laura-ramos-alonso-923056223"
                    title="linkedin"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
