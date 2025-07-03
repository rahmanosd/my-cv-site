
import Header from '../shared/Header/Header';
import News from './News';
import banner from '../../assets/banner.jpg';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Carrer from '../Carrer/Carrer';
import Reveal from '../../animation/Reveal';
import { FaFacebook } from 'react-icons/fa';
import Footer from '../Footer/Footer';
const Home = () => {
    return (

        <div>
            <Header></Header>
            <News></News>

            <Reveal>

                <div className="relative mt-5">
                    <div className="hero min-h-screen"
                    >
                        <img className='min-h-screen' src={banner} alt="" />
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold text-white hover:text-blue-700">Web Developer</h1>
                                <p className="mb-5 text-white hover:text-blue-700">
                                    Web development is the process of creating, building, and maintaining websites and web applications.<br />
                                    It involves everything from web design to programming and database management.
                                </p>
                                <div>
                                    <input 
                                        type="text"
                                        placeholder="Type here"
                                        className="input input-bordered input-primary w-full max-w-xs text-black" />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Navbar */}
                    <nav className="absolute top-0 left-0 w-full flex  justify-between text-black items-center px-6 py-4 shadow-md ">
                        <h1 className="text-xl font-bold text-white hover:text-blue-700">DEV.RIZVI</h1>
                        <ul className="flex gap-6 md:gap-8">
                            <li><a href="#home" className="text-white hover:text-blue-600">Home</a></li>
                            <li><a href="#about" className="text-white hover:text-blue-600">About</a></li>
                            <li><a href="#projects" className="text-white hover:text-blue-600">Projects</a></li>
                            <li><a href="#carrer" className="text-white hover:text-blue-600">Career</a></li>

                        </ul>
                        <li className='hidden md:flex'><a href="https://www.facebook.com/rafim.rizvi.2025" className='btn btn-sm btn-outline bg-white'><FaFacebook></FaFacebook>Facebook</a></li>
                    </nav>

                </div>

            </Reveal >
            <About></About>
            <Projects></Projects>
            <Carrer></Carrer>
            <Footer></Footer>
        </div >
    );
};

export default Home;