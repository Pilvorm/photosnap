import Hero from "../components/hero";
import Camera from "@/public/assets/features/desktop/hero-alt.jpg";
import Features from "../components/features";
import Banner from "../components/banner";

export default function StoriesPage() {
  return (
    <>
      <Hero
        title="Features"
        description=
          "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        heroImg={Camera}
        imgAlt={"Close-up of a person standing outdoors at sunset, holding a DSLR camera at their side"}
      />
      <Features />
      <Banner />
    </>
  );
}
