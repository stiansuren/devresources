import { Link } from "./link";
import { motion } from "framer-motion";
import "./content.scss";

type Link = {
  title: string;
  id: string;
  url: string;
  tags: Array<Tags>;
};

type Tags = {
  tag: string;
};

type ContentProps = {
  links: Array<Link>;
};

const variants = {
  whileHover: {
    scale: 1.1
  },
  visible: (i: any) => ({
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.03
    },
    scale: 1
  }),
  hidden: {
    opacity: 0,
    scale: 1.05
  }
};

export const Content = ({ links }: ContentProps) => {
  return (
    <>
      <p>{links.length === 1 ? `1 paper` : `${links.length} papers`}</p>
      <ul className="links">
        {links.map((link: Link, i) => {
          return (
            <motion.li
              custom={i + 1}
              initial="hidden"
              animate="visible"
              whileHover="whileHover"
              variants={variants}
              key={link.id}
              className="links__item"
            >
              <Link key={link.id} link={link} />
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};
