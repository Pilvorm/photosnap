import Link from "next/link";
import Image from "next/image";
import Stories from "../components/stories";

export default function StoriesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex min-h-[650px] md:relative"
        style={{
          backgroundImage: `url(assets/stories/desktop/moon-of-appalachia.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="flex flex-col justify-center text-white">
          <div className="px-10 md:px-28">
            <h2 className="text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
              Hazy Full
              <br />
              Moon of
              <br />
              Appalachia
            </h2>
            <p className="mt-5 mb-12 w-[62%] opacity-60 text-[15px] leading-[25px] font-light">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <Link
              href={""}
              className="tracking-[2px] text-xs uppercase font-bold"
            >
              Get an Invite
            </Link>
          </div>
        </div>
      </section>
      <Stories />
    </>
  );
}
