import Link from "next/link";
import Image from "next/image";
import { VscArrowRight } from "react-icons/vsc";

const ArrowLink = ({ position, color, disableAnimation, linkText, url }) => {
  return (
    <Link href={url} className={`link ${!disableAnimation && "animated"} flex items-center ${position == "end" && "justify-end"} gap-5`}>
      <div className="link-text tracking-[2px] text-xs uppercase font-semibold">
        {linkText}
      </div>
      <div className={`link-arrow text-${color}`}>
        <svg
          className="arrow-shaft"
          width="42"
          height="1"
          viewBox="0 0 42 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.5H41.864" stroke="currentColor" />
        </svg>
        <svg
          className="arrow-point"
          width="7"
          height="13"
          viewBox="0 0 7 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.353577 0.353546L6.35358 6.35355L0.353577 12.3535"
            stroke="currentColor"
          />
        </svg>
      </div>
    </Link>
  );
};

export default ArrowLink;
