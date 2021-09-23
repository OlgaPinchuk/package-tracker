import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        {/* <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook}  size="lg"/>
        </a> */}
        <SocialIcon />
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram}  size="lg"/>
        </a>
      </div>
      <div className="copyright">
        <p> © 2021 • InstaPacket</p>
      </div>
    </footer>
  );
}
