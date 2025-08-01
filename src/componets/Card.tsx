interface Props {
  title: string;
  start_date: string;
  end_date: string;
  company_name: string,
  description: string[]
}

export const Card = ({title, start_date, end_date, company_name, description} : Props) => {
  return (
    <>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <time className="font-mono italic">
          {start_date} - {end_date}
        </time>
        <div className="text-lg font-black">{company_name}</div>
        <ul className="list-disc">
          {description.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
