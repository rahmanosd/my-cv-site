
import { FaFacebook, FaGithub } from 'react-icons/fa';
import Reveal from '../../animation/Reveal';

const Carrer = () => {
    return (
          <Reveal>
        <div id='carrer'>
         <h2 className='text-3xl hover:text-slate-600 text-center mt-3'>𝙼𝚈 𝙲𝙰𝚁𝚁𝙴𝚁</h2>
            <div className="overflow-x-auto mt-3 border border-black">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            
                            <th className='border border-black'>NAME</th>
                            <th className='border border-black'>CURRENT STUDY LEVEL</th>
                            <th className='border border-black'>FUTURE CARRER GOAL</th>
                            <th className='border border-black'>CONTACT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='text-center'>
                            <td className='border border-black'>RAHMAN <strong>(RIZVI)</strong></td>
                            <td className='border border-black'>Diploma 5th Semester</td>
                            <td className='border border-black'>Web Developer & Software Engineer</td>
                            <td className='border border-black'><a href="https://www.facebook.com/rafim.rizvi.2025" className='btn btn-sm btn-outline'><FaFacebook></FaFacebook>Facebook</a>
                            <br />
                         <a href="https://github.com/rahmanosd" className='btn btn-sm btn-outline w-24 mt-1'><FaGithub></FaGithub>Github</a>
                            </td>
                           
                           
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
        </Reveal>
    );
};

export default Carrer;