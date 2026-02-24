import Hero from "./components/hero";
import Description from "./components/description";
import Stories from "./components/stories";
import Features from "./components/features";
import Photographer from "@/public/assets/home/desktop/create-and-share.jpg";

export default function Home() {
  return (
    <>
      <Hero
        title="Create and share your photo stories."
        description=
          "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        
        linkText="Get an Invite"
        url=""
        heroImg={Photographer}
        imgAlt="Photographer on a dock."
      />
      <Description />
      <Stories display={4} />
      <Features display={3} />
    </>
  );
}
