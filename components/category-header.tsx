import { useRouter } from "next/router";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "./category-header.scss";

const variants = {
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 1.02, opacity: 0 },
  whileHover: { scale: 1.02 }
};

const line = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1
  },
  whileHover: {
    pathLength: 0.7
  }
};

export const CategoryHeader = () => {
  const router = useRouter();
  const [category, setCategory] = useState(router.query.category);

  return (
    <div className="category">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover="whileHover"
        className="category__back"
      >
        <Link href="/" scroll={false}>
          <a>
            <LeftArrow /> All categories
          </a>
        </Link>
      </motion.div>
      <h1 className="category__header">{category}</h1>
    </div>
  );
};

const LeftArrow = () => (
  <svg
    width="52"
    height="16"
    viewBox="0 0 74 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      variants={line}
      initial="hidden"
      animate="visible"
      whileHover="whileHover"
      d="M1 8H74"
      stroke="#0039CC"
      strokeWidth="2"
    />
    <path d="M8.5 1L1.5 8L8.5 15" stroke="#0039CC" strokeWidth="2" />
  </svg>
);
