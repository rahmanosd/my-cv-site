
import Reveal from '../../../animation/Reveal';
const Header = () => {
    return (
        <Reveal>
            <div
                className='text-center p-2'>
                <h2 className='text-2xl font-semibold m-1'>MOKSODOR RAHMAN (RIZVI)</h2>
                <p className='text-xl m-1'>"𝕀'𝕞 𝕒 𝔽𝕦𝕝𝕝-𝕊𝕥𝕒𝕔𝕜 𝕎𝕖𝕓 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣"</p>
            </div>
        </Reveal>
    );
};

export default Header;

// initial={{ opacity: 0, scale: 0.5 }}
// animate={{ opacity: 1, scale: 1 }}
// transition={{ duration: 0.5 }}