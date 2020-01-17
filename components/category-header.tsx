import { useRouter } from "next/router";
import Link from "next/link";
import "./category-header.scss";

export const CategoryHeader = () => {
  const router = useRouter();

  return (
    <div className="category">
      <Link href="/" scroll={false}>
        <a className="category__back">
          <LeftArrow /> Back to all categories
        </a>
      </Link>
      <h1 className="category__header">{router.query.category}</h1>
    </div>
  );
};

const LeftArrow = () => (
  <svg
    width="74"
    height="16"
    viewBox="0 0 74 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 8H74" stroke="#0039CC" strokeWidth="2" />
    <path d="M8.5 1L1.5 8L8.5 15" stroke="#0039CC" strokeWidth="2" />
  </svg>
);
