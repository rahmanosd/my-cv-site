import React from 'react';
import { motion } from 'framer-motion';
import about from '../../../src/assets/about.jpg'
import { FaBootstrap, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoFirebase } from 'react-icons/io5';
import { DiMongodb } from 'react-icons/di';
import Reveal from '../../animation/Reveal';
const About = () => {
    return (
    <Reveal>
        <div id='about'>
            <h2 className='text-3xl hover:text-slate-700 text-center mt-3'>𝙰𝙱𝙾𝚄𝚃 𝙼𝙴</h2>
            <div className='flex flex-col items-center md:flex-row md:items-start  md:text-left gap-5 mt-3 md:mt-6' >
                <div className='md:w-1/2'>
                    <img className='md:h-[530px] w-full' src={about} alt="rizvi.png" />
                </div>
                <div className='md:w-1/2 ml-1'>
                    <h2 className=''>Hello! I'm <strong>Rizvi,</strong> a passionate and self-motivated Web Developer based in Bangladesh. I enjoy building fast, responsive, and user-friendly websites using modern technologies like <strong>HTML, CSS, JavaScript, and React.</strong> </h2>
                    <br />
                    <p><span className='text-xl font-semibold'>My strengths include:</span>

                        <li>Clean and well-structured code</li>
                        <li>Mobile-friendly, responsive design</li>
                        <li>Problem-solving mindset</li>
                        <li>Eagerness to learn and grow continuously</li>
                        <li>My goal is to become a professional Full Stack Developer and work on real-world projects that make a difference.</li>

                    </p>
                    <div>
                        <h3 className='text-xl font-semibold mt-4'>Skilled By:</h3>
                        <span className='flex'><FaHtml5 className='mt-1'></FaHtml5>HTML</span>
                        <span className='flex'><IoLogoJavascript className='mt-1'></IoLogoJavascript>JavaScript (ES6+)</span>
                        <span className='flex'><RiTailwindCssFill className='mt-1'></RiTailwindCssFill>Tailwind CSS</span>
                        <span className='flex'><IoLogoFirebase className='mt-1'></IoLogoFirebase>Firebase Authentication</span>
                        <span className='flex'><FaGithub className='mt-1'></FaGithub>Git & GitHub</span>
                        <span className='flex'><FaNodeJs className='mt-1'></FaNodeJs>Node Js</span>
                        <span className='flex'><DiMongodb className='mt-1'></DiMongodb>MongoDB</span>
                        <span className='flex'><FaBootstrap className='mt-1'></FaBootstrap>Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
        </Reveal>
    );
};

export default About;
