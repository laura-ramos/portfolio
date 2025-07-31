import image from "../assets/girl-dev.png";
import { SocialButton } from "../componets/SocialButton";

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
              <SocialButton/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
