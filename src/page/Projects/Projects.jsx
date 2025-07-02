import { FaFacebook, FaGithub, FaHtml5 } from 'react-icons/fa';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.jpg';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import Reveal from '../../animation/Reveal';
const Projects = () => {
    return (
        <Reveal>
            <div id='projects'>
                <h2 className="text-3xl hover:text-orange-400 text-center mt-4">𝙼𝚈 𝙿𝚁𝙾𝙹𝙴𝙲𝚃𝚂</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-4'>

                    {/* Projects card - 1 */}

                    <div className='transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'>
                        <div className="card  bg-base-200 shadow-xl">
                            <figure><img src={project1} className='md:h-[180px] md:w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">DRAGON-NEWS-AUTH</h2>
                                <p>A <strong>dragon</strong> is a magical legendary creature that appears worldwide.</p>
                                <strong>Technology : </strong>
                                <span className='flex'><FaHtml5 className='mt-1'></FaHtml5>HTML</span>
                                <span className='flex'><IoLogoJavascript className='mt-1'></IoLogoJavascript>JavaScript (ES6+)</span>
                                <span className='flex'><RiTailwindCssFill className='mt-1'></RiTailwindCssFill>Tailwind CSS</span>
                                <span className='flex'><IoLogoFirebase className='mt-1'></IoLogoFirebase>Firebase Authentication</span>
                                <span className='flex'><FaGithub className='mt-1'></FaGithub>Git & GitHub</span>
                                <a href="https://rahmanosd.github.io/dragon-news-auth/" className='text-lg link text-blue-700 hover:text-blue-400'>Visit My Website</a>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/rahmanosd/dragon-news-auth" className='btn btn-sm btn-outline'><FaGithub></FaGithub>Github Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* projects card - 2 */}

                    <div className='transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'>
                        <div className="card  bg-base-200 shadow-xl">
                            <figure><img src={project2} className='md:h-[180px] md:w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">ALPHABET-CLASH-PRO</h2>
                                <p>Unleash Your Keyboard : Press "Enter" to Play</p>
                                <strong>Technology : </strong>
                                <span className='flex'><FaHtml5 className='mt-1'></FaHtml5>HTML</span>
                                <span className='flex'><IoLogoJavascript className='mt-1'></IoLogoJavascript>JavaScript (ES6+)</span>
                                <span className='flex'><RiTailwindCssFill className='mt-1'></RiTailwindCssFill>Tailwind CSS</span>
                                <span className='flex'><IoLogoFirebase className='mt-1'></IoLogoFirebase>Firebase Authentication</span>
                                <span className='flex'><FaGithub className='mt-1'></FaGithub>Git & GitHub</span>
                                <a href="https://rahmanosd.github.io/ALPHABET-CLASH-PRO/" className='text-lg link text-blue-700 hover:text-blue-400'>Visit My Website</a>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/rahmanosd/ALPHABET-CLASH-PRO" className='btn btn-sm btn-outline'><FaGithub></FaGithub>Github Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* projects card - 3 */}

                    <div className='transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'>
                        <div className="card  bg-base-200 shadow-xl">
                            <figure><img src={project3} className='md:h-[180px] md:w-full' alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">G3-ARCHITECTS-WEBSITE</h2>
                                <p>Unleash Your Keyboard : Press "Enter" to Play</p>
                                <strong>Technology : </strong>
                                <span className='flex'><FaHtml5 className='mt-1'></FaHtml5>HTML</span>
                                <span className='flex'><IoLogoJavascript className='mt-1'></IoLogoJavascript>JavaScript (ES6+)</span>
                                <span className='flex'><RiTailwindCssFill className='mt-1'></RiTailwindCssFill>Tailwind CSS</span>
                                <span className='flex'><IoLogoFirebase className='mt-1'></IoLogoFirebase>Firebase Authentication</span>
                                <span className='flex'><FaGithub className='mt-1'></FaGithub>Git & GitHub</span>
                                <a href="https://rahmanosd.github.io/g3-architects-website/" className='text-lg link text-blue-700 hover:text-blue-400'>Visit My Website</a>
                                <div className="card-actions justify-end">
                                    <a href="https://github.com/rahmanosd/g3-architects-website" className='btn btn-sm btn-outline'><FaGithub></FaGithub>Github Code</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export default Projects;