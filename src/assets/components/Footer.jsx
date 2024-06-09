import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <section className="foot">
      <div className="footercontain">
        <div className="footercontact">
          <h2>our socials</h2>
          <p>follow us on our social media pages</p>
          <div className="links">
            <a href="www.meta.com">{<FaFacebook />}facebook</a>
            <a href="www.meta.com">{<FaInstagram />}FaInstagram</a>
            <a href="www.meta.com">{<FaTwitter />}twitter</a>
            <a href="www.meta.com">{<FaLinkedin />}linkedin</a>
            <a href="www.meta.com">{<FaDiscord />}join our discord</a>
            <a href="www.meta.com">{<FaPhone />}071112223334</a>
          </div>
        </div>
        <div className="footerabout">
          <h2>about us</h2>
          <div className="footer abouttext">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              corporis blanditiis id odit corrupti eaque culpa facilis harum
              suscipit qui et error similique iure maxime maiores officia rem
              quasi, repudiandae labore dolorem cupiditate numquam vitae atque
              ex. Iure nisi cum mollitia accusamus, quibusdam cumque hic!
              Voluptatem repellatatqueuta!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
