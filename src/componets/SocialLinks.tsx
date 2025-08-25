import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { IconLink } from "./IconLink";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export const SocialLinks = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <IconLink
          href="https://github.com/laura-ramos"
          title="Github"
          isCircle
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </IconLink>
      </li>
      <li>
        <IconLink
          href="https://www.linkedin.com/in/laura-ramos-dev"
          title="Linkedin"
          isCircle
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </IconLink>
      </li>
      <li>
        <IconLink
          href="mailto:lauraramos.dev@gmail.com"
          title="contact me by email"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          Contáctame
        </IconLink>
      </li>
    </ul>
  );
}