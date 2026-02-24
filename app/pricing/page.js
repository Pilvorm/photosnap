import Hero from "../components/hero";
import Sunset from "@/public/assets/pricing/desktop/hero-alt.jpg";
import Prices from "../components/prices";
import ComparisonTable from "../components/comparisonTable";

export default function Pricing() {
  return (
    <>
      <Hero
        title="Features"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        heroImg={Sunset}
        imgAlt={
          "A silhouette of a woman setting a camera on a tripod with sunset in the background."
        }
      />
      <Prices />
      <ComparisonTable />
    </>
  );
}
