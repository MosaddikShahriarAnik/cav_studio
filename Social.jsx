import '../Footer/social.css'
import social1 from '../../assets/Spin/be.svg'
import social2 from '../../assets/Spin/w.svg'
import social3 from '../../assets/Spin/ins.svg'
import social4 from '../../assets/Spin/li.svg'
import { Link } from 'react-router-dom'

const Social = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className="social">
                <div className='social2 hover:bg-white'>
                    <Link target="_blank" to="https://www.behance.net/cavstudio2" aria-label="Behance">
                        <img className='link' src={social1} alt="Behance" />
                    </Link>
                </div>
            </div>
            <div className="social">
                <div className='social2 hover:bg-white'>
                    <Link target="_blank" to="https://dribbble.com/cavstudio2024" aria-label="Dribbble">
                        <img className='link' src={social2} alt="Dribbble" />
                    </Link>
                </div>
            </div>
            <div className="social">
                <div className='social2 hover:bg-white'>
                    <Link target="_blank" to="https://www.linkedin.com/company/cavstudio24" aria-label="LinkedIn">
                        <img className='link' src={social3} alt="LinkedIn" />
                    </Link>
                </div>
            </div>
            <div className="social">
                <div className='social2 hover:bg-white'>
                    <Link target="_blank" to="https://www.instagram.com/cavstudio.agency/" aria-label="Instagram">
                        <img className='link' src={social4} alt="Instagram" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Social;
