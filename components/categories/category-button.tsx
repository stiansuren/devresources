import Link from "next/link";

type CategoryButtonProps = {
  tag: string;
};

export const CategoryButton = ({ tag }: CategoryButtonProps) => {
  return (
    <Link href="/[category]" as={`/${tag}`}>
      <a className={`category__button`}>{tag}</a>
    </Link>
  );
};
