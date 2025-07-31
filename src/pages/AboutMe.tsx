import image from "../assets/girl-dev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

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
                Desarrollador Web Frontend con experiencia en el diseño, desarrollo y mantenimiento
                de aplicaciones web completas. Colaborador eficiente, con un buen
                entendimiento del backend, enfocado en resultados y la mejora continua
                para entregar soluciones exitosas.
              </p>
              <ul className="flex gap-4">
                <li>
                  <a
                    className="btn btn-circle btn-outline btn-primary text-neutral"
                    href="https://github.com/laura-ramos"
                    title="github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-circle btn-outline btn-primary text-neutral"
                    href="https://www.linkedin.com/in/laura-ramos-dev"
                    title="linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-outline btn-primary text-neutral"
                    href="mailto:lauraramos.dev@gmail.com"
                    title="contact me by email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" /> Contáctame
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
