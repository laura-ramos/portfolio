import { EXPERIENCE } from '../data/data';

function Experience() {

    return (
        <>
            <div className="max-w-5xl mx-auto p-4">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {EXPERIENCE.map((item, index) => (
                        <li key={index}>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-7 w-7 text-accent">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className={`card bg-base-100 shadow-xl mb-10 ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'}`}>
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <time className="font-mono italic">{item.start_date}-{item.end_date}</time>
                                    <div className="text-lg font-black">{item.company_name}</div>
                                    <ul className="list-disc">
                                        {item.description.map((data, index) => (
                                            <li key={index}>{data}</li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                            <hr className="bg-accent" />
                        </li>
                    ))}

                </ul>
            </div>

        </>
    )
}

export default Experience
