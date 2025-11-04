import Link from "next/link";
import { STORIES_LIST } from "../data";
import StoryCard from "./storyCard";

const Stories = ({display}) => {

  const stories = display ? STORIES_LIST.slice(0, display) : STORIES_LIST;

  return (
    <section className="w-full grid md:grid-cols-2 lg:grid-cols-4">
      {/* First */}
      {stories.map((story, idx) => (
        <StoryCard
          key={idx}
          date={story.date}
          title={story.title}
          author={story.author}
          image={story.image}
        />
      ))}
    </section>
  );
};

export default Stories;
