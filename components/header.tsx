import Link from "next/link";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a className="header__logo">The Code Journal</a>
      </Link>
    </header>
  );
};
