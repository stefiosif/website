import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => {

  const iconGithub = <FontAwesomeIcon icon={faGithub} />
  const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />

  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-600">
        <div>Built with Next.js and Tailwind CSS.<br/>Hosted by Github.</div>
        <div className="text-3xl text-slate-300 flex inline-flex gap-4">
          <Link href={"https://github.com/stefiosif"}>
            <a className="hover:text-indigo-500">
              {iconGithub}
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/stefanos-iordanis-iosifidis/"}>
            <a className="hover:text-indigo-500">
              {iconLinkedin}
            </a>
          </Link>
        </div>
    </div>
  );
};

export default Footer;