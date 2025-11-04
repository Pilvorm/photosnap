import Description from "./components/description";
import Stories from "./components/stories";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <Description />
      <Stories display={4} />
      <Features display={3} />
    </>
  );
}
