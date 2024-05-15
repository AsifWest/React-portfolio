import logo from "../assets/asifsLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa"; // Importing icons from React Icons

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-8 w-20" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/asif-sheikh-601727271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="https://x.com/AsifWestt?t=XCs2yCUf1Fkmos5kSYYFXA&s=08">
          <FaTwitterSquare />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
