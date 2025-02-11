import Link from "next/link";
import { CSSProperties } from "react";

type AwardLinkProps = {
  name?: string;
  id: string;
};

const link: CSSProperties = {
  textDecoration: "underline",
  fontStyle: "italic",
};

const AwardLink = ({ name, id }: AwardLinkProps) => {
  return (
    <Link
      style={link}
      href={`https://www.nsf.gov/awardsearch/showAward?AWD_ID=${id}`}
      target="_blank"
    >
      {name ?? "#" + id}
    </Link>
  );
};

export default AwardLink;
