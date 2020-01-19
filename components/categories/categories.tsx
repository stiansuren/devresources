import React from "react";
import { CategoryButton } from "./category-button";
import "./categories.scss";
import { motion } from "framer-motion";

type Tags = {
  tag: string;
};

type CategoryProps = {
  tagTypes: Array<Tags>;
};

const variants = {
  visible: (i: any) => ({
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.04
    },
    scale: 1
  }),
  hidden: {
    opacity: 0,
    scale: 1.05
  },
  whileHover: {
    scale: 1.04
  }
};

export const Categories = ({ tagTypes }: CategoryProps) => {
  return (
    <div className="categories">
      <h2 className="categories__header">Categories</h2>
      <ul className="categories__buttons">
        {tagTypes.map((tag, i) => (
          <motion.li
            custom={i + 1}
            initial="hidden"
            animate="visible"
            whileHover="whileHover"
            variants={variants}
            key={tag.toString()}
          >
            <CategoryButton tag={tag.toString()} key={tag.toString()} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
