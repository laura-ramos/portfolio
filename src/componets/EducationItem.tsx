import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string,
  url: string,
  image?: string,
  duration: string,
  college: string,
  description: string
}

export const EducationItem = ({title, college, description, url, image, duration } : Props) => {
  return (
    <>
      <a className="avatar hidden md:block" href={url} target="_blank" rel="noreferrer" aria-label="UTVCO">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="card border shadow-xl ml-3 w-full">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <time className="font-mono italic">
            {duration}
          </time>
          {college}
          <p>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            {description}
          </p>
        </div>
      </div>
    </>
  );
}