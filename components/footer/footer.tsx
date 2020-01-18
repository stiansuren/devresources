import Link from "next/link";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <Link href="/">
        <a className="footer__logo">The Code Journal</a>
      </Link>
      <div className="footer__bio">
        <p>Made by Stian Surén</p>
        <a href="https://github.com/stiansuren">Github</a>
        <a href="https://no.linkedin.com/in/stiansuren">Linkedin</a>
      </div>
    </footer>
  );
};
