import Link from "next/link";

const StoryCard = ({ date, title, author, image }) => {
  return (
    <div className="story-wrapper cursor-pointer relative">
      <div
        className="story h-[375px] md:h-[550px] lg:h-[650px] p-10 flex flex-col justify-end gap-3 text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/stories/desktop/${image}.jpg)`,
        }}
      >
        <div className="w-full flex flex-col gap-1">
          {date && <p className="text-[13px]">{date}</p>}
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-[13px]">by {author}</p>
        </div>
        <div className="stories-divider"></div>
        <div>
          <Link
            href={""}
            className="tracking-[2px] text-xs uppercase font-semibold"
          >
            Read Story
          </Link>
        </div>
      </div>
      <div className="gradient-horizotal absolute bottom-[-6px] z-[-1]">
      </div>
    </div>
  );
};

export default StoryCard;
