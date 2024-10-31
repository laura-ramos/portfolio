import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EXPERIENCE } from '../data/data';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Experience() {

    return (
        <>
            <div className="max-w-5xl mx-auto p-4">
            <h3 className="text-6xl font-bold text-center">Experience</h3>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {EXPERIENCE.map((item, index) => (
                        <li key={index}>
                            <div className="timeline-middle">
                                <FontAwesomeIcon icon={faCircleCheck} size='2x'/>

                            </div>
                            <div className={`card ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'}`}>
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
                            <hr />
                        </li>
                    ))}

                </ul>
            </div>

        </>
    )
}

export default Experience
