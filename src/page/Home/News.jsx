
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
const News = () => {
    return (

        <div className="flex font-medium" >
            <button className="btn btn-sm btn-outline">EXPERT-DEVELOPER</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="mr-4" to='/'>
                    𝙸'𝚖 𝚊 𝚙𝚊𝚜𝚜𝚒𝚘𝚗𝚊𝚝𝚎 𝚆𝚎𝚋 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚏𝚛𝚘𝚖 𝙱𝚊𝚗𝚐𝚕𝚊𝚍𝚎𝚜𝚑,
                </Link>
                <Link className="mr-4" to='/'>
                    𝚆𝚒𝚝𝚑 𝚜𝚔𝚒𝚕𝚕𝚜 𝚒𝚗 𝙷𝚃𝙼𝙻,𝙲𝚂𝚂,𝙹𝚊𝚟𝚊𝚂𝚌𝚛𝚒𝚙𝚝 & 𝚁𝚎𝚊𝚌𝚝.
                </Link>
                <Link className="mr-4" to='/'>
                    𝙸 𝚕𝚘𝚟𝚎 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 𝚊𝚗𝚍 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚠𝚎𝚋𝚜𝚒𝚝𝚎𝚜.

                </Link>
            </Marquee>
        </div>

    );
};

export default News;