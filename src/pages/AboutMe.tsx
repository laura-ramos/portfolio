import { SKILLS, SOCIAL_NETWORKs } from '../data/data';
import image from "../assets/dev.png";
import Icon from '../componets/Icon';
function AboutMe() {

    return (
        <>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
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
                                    <button className="btn btn-circle btn-outline" title={item.name}>
                                        <Icon iconName={item.icon} />

                                    </button>

                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <div className="mx-auto grid grid-cols-12 max-w-7xl">
                <div className="col-span-5">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                <div className='col-span-7'>
                    <h3 className="text-6xl font-bold">Skills</h3>
                    <ul className="inline-grid grid-cols-4 gap-5 mt-4 w-full">
                        {SKILLS.map(item => (
                            <li key={item.id}>
                                <button className='group text-sm font-semibold w-full flex flex-col items-center text-sky-500'>
                                    <img
                                        src={item.image}
                                        className="rounded-lg w-24" />
                                    {item.name}
                                </button>

                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </>
    )
}

export default AboutMe
