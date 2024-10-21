import { SKILLS, SOCIAL_NETWORKs } from '../data/data';
import image  from "../assets/dev.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Icon from '../componets/Icon';
function AboutMe() {

    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, I'm Laura!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                            
                        </p>
                        <ul className="flex gap-4">
                    {SOCIAL_NETWORKs.map((item, index) => (
                        <li key={index}>
                        <button className="btn btn-outline">
                        <Icon iconName={item.icon}/>
                                {item.name}
                        </button>
                           
                        </li>
                    ))}
                </ul>

                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <h3 className="text-5xl font-bold">Skills</h3>
                <ul className="inline-grid grid-cols-4 gap-5 mt-4">
                    {SKILLS.map(item => (
                        <li key={item.id}>
                        <button className='group text-sm font-semibold w-full flex flex-col items-center text-sky-500'>
                             <img
                                src={item.image}
                                className="rounded-lg w-24 h-24" />
                                {item.name}
                        </button>
                           
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

export default AboutMe
