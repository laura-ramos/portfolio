
interface Props {
  title: string,
  url: string,
  image: string,
  description: string,
  skills?: Array<string>
}
export const ProjectItem = ({ title, url, image, description, skills=[] }: Props) => {
  return (
    <div className="bg-base-100 shadow-xl h-fit border">
      <a href={url} target="_blank" rel="noreferrer">
        <div
          className={`relative group portfolio overflow-hidden shadow-sm`}
        >
          <img
            src={image}
            alt="Imagen"
            className="w-full max-h-64 object-cover transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p>{description}</p>
          <div>
            {skills.map((skill, i) => (
              <span key={i} className="badge badge-dash badge-primary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}