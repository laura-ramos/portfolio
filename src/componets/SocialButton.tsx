import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialButton = () => {
  return (
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
  );
}