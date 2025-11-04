import Link from "next/link";
import Image from "next/image";
import Stories from "../components/stories";

export default function StoriesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex feature-wrapper-left md:min-h-[650px]"
        style={{
          backgroundImage: `url(assets/stories/desktop/moon-of-appalachia.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-md:relative py-16 lg:aspect-square bg-black md:bg-transparent flex flex-col justify-center text-white">
          <div className="feature-content-wrapper md:relative px-8 md:px-28">
            <div className="tracking-[2px] text-xs uppercase font-bold">Last Month's Featured Story</div>
            <h2 className="mt-6 text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
              Hazy Full
              <br />
              Moon of
              <br />
              Appalachia
            </h2>
            <div className="mt-6 text-white/75 text-[15px] leading-[25px] font-light">March 2nd 2020 <span className="text-white/100">by John Appleseed</span></div>
            <p className="mt-5 mb-12 text-white/75 text-[15px] leading-[25px] font-light">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <Link
              href={""}
              className="tracking-[2px] text-xs uppercase font-bold"
            >
              Read the Story
            </Link>
          </div>
        </div>
        <div className="w-full h-[295px] md:h-full relative"></div>
      </section>

      <Stories />
    </>
  );
}
