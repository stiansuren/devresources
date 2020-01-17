import Link from "next/link";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a className="header__logo">The Code Journal</a>
      </Link>
    </div>
  );
};
