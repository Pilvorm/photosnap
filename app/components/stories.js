import Link from "next/link";

const storiesList = [
  {
    title: "The Mountains",
    author: "John Appleseed",
    image: "mountains",
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    image: "cityscapes",
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    image: "18-days-voyage",
  },
  {
    title: "Architectural",
    author: "Samantha Brooke",
    image: "architecturals",
  },
];

const Stories = ({}) => {
  return (
    <section className="w-full grid md:grid-cols-2 lg:grid-cols-4">
      {/* First */}
      {storiesList.map((story, idx) => (
        <div
          key={story.title}
          className="story md:h-[500px] lg:h-[650px] p-10 flex flex-col justify-end gap-3 text-white bg-cover bg-center"
          style={{
            backgroundImage: `url(/assets/stories/desktop/${story.image}.jpg)`,
          }}
        >
          <div className="w-full flex flex-col gap-1">
            <h3 className="text-lg font-bold">{story.title}</h3>
            <p className="text-[13px]">by {story.author}</p>
          </div>
          <div className="stories-divider"></div>
          <div>
            <Link
              href={""}
              className="tracking-[2px] text-xs uppercase font-bold"
            >
              Read Story
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stories;
