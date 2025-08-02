import { EDUCATION } from "../data/data";
import { EducationItem } from "../componets/EducationItem";

export const Education = () => {
  return (
    <>
      <section id="education">
        <h2 className="text-3xl font-bold text-center">Education</h2>
        <ul className="">
          {EDUCATION.map((item, index) => (
            <li
              key={index}
              className="sm:flex-none md:flex items-center m-4 gap-3"
              data-aos="zoom-in"
            >
              <EducationItem {...item}/>
              <hr />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
