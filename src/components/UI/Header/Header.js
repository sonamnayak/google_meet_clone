import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle,faExclamationCircle,faCog } from '@fortawesome/free-solid-svg-icons'
import "./header.scss"

const Header = () =>{

    
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"alt="Google Meet" />
                <span className="logo-text">Meet</span>
            </div>
            <div className="action-btns">
            <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
            <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
            <FontAwesomeIcon className="icon-block" icon={faCog} />
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I54gng_zDURpU-6Rgjg-qd1Cq8peLDMiU6zZBuq=s32-c-mo"></img>
            </div>
        </div>
    )
};


export default Header;
