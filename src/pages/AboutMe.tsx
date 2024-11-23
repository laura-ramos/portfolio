import { SKILLS, SOCIAL_NETWORKs } from '../data/data';
import image from "../assets/girl-dev.png";
import Icon from '../componets/Icon';
function AboutMe() {

    return (
        <>
            <div className="hero animate-fade-right animate-delay-[3ms]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=' content-center'>
                        <img
                            src={image}
                            className="rounded-lg shadow-2xl w-full" />
                    </div>

                    <div>
                        <h1 className="text-6xl font-bold">Hi, I'm Laura!</h1>
                        <p className="py-6 text-xl">
                            I am web developer from Mexico, Oaxaca.
                            I have experience in web design, coding and programing.
                            My experience lies within front-end web apps, and the main languages in my tech stack are
                            JavaScript, React, and of course HTML/CSS
                        </p>
                        <ul className="flex gap-4">
                            {SOCIAL_NETWORKs.map((item, index) => (
                                <li key={index}>
                                    <a className="btn btn-circle btn-outline btn-primary text-neutral" href={item.url} title={item.name}>
                                        <Icon iconName={item.icon} color='text-neutral' />
                                    </a>

                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-4 text-center">
                <div className='animate-fade-left animate-delay-[3ms]'>
                    {SKILLS.map((item, index) => (
                        <div key={index} className='pt-6 pb-6'>
                            <h3 className="text-4xl font-bold mb-5">{item.name}</h3>
                            <ul className="inline-grid lg:grid-cols-6 gap-5 md:grid-cols-3 grid-cols-2">
                                {item.skills.map((data, index) => (
                                    <li key={index}>
                                        <button className='border group text-sm font-semibold grid flex-col items-center p-3 w-36 h-28 justify-items-center'>
                                            <img
                                                src={data.image}
                                                className="h-16" />
                                            <span className='pt-2'>{data.name}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutMe
