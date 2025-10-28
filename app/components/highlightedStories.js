import Link from "next/link";
import { STORIES_LIST } from "../data";
import StoryCard from "./storyCard";

const HighlightedStories = ({}) => {
  return (
    <section className="w-full grid md:grid-cols-2 lg:grid-cols-4">
      {/* First */}
      {STORIES_LIST.slice(0, 4).map((story, idx) => (
        <StoryCard
          key={idx}
          title={story.title}
          author={story.author}
          image={story.image}
        />
      ))}
    </section>
  );
};

export default HighlightedStories;
