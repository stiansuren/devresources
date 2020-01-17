import { Link } from "./content/link";
import "./inspiration.scss";
import { Content } from "./content/content";

type Link = {
  title: string;
  id: string;
  url: string;
  tags: Array<Tags>;
};

type Tags = {
  tag: string;
};

type InspirationProps = {
  links: Array<Link>;
};

export const Inspiration = ({ links }: InspirationProps) => {
  return (
    <div className="inspiration">
      <h2 className="inspiration__header">Inspiration</h2>
      <Content links={links} />
    </div>
  );
};
