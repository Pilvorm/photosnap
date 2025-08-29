import Link from "next/link";
import Image from "next/image";
import Photographer from "@/public/assets/home/desktop/create-and-share.jpg";
import Laptop from "@/public/assets/home/desktop/beautiful-stories.jpg";
import Videographer from "@/public/assets/home/desktop/designed-for-everyone.jpg";

const Description = ({}) => {
  return (
    <section className="">
      {/* First */}
      <div className="flex feature-wrapper-left md:h-[650px]">
        <div className="max-md:relative py-8 lg:aspect-square bg-black flex flex-col justify-center text-white">
          <div className="feature-content-wrapper md:relative px-8 md:px-28">

            <div className="gradient-vertical absolute top-0 left-8 md:left-0"></div>

            <h2 className="text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
              Create and
              <br />
              Share Your
              <br />
              Photo Stories.
            </h2>
            <p className="mt-5 mb-12 opacity-60 text-[15px] leading-[25px]">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <Link href={""} className="tracking-[2px] text-xs uppercase font-bold">
              Get an Invite
            </Link>
          </div>
        </div>
        <div className="w-full h-[295px] md:h-full relative">
          <Image
            src={Photographer}
            fill
            quality={100}
            className="object-cover"
            alt="Photographer on a dock"
          />
        </div>
      </div>

      {/* SECOND */}
      <div className="flex feature-wrapper-right md:h-[650px]">
        <div className="w-full h-[295px] md:h-full relative">
          <Image
            src={Laptop}
            fill
            quality={100}
            className="object-cover"
            alt="Designing application on a laptop"
          />
        </div>
        <div className="py-8 md:px-18 lg:aspect-square flex flex-col justify-center">
          <div className="feature-content-wrapper relative px-8 md:px-18">
            <h2 className="text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
              Beautiful
              <br />
              Stories
              <br />
              Everytime
            </h2>
            <p className="mt-5 mb-12 opacity-60 text-[15px] leading-[25px]">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <Link href={""} className="tracking-[2px] text-xs uppercase font-bold">
              View the Stories
            </Link>
          </div>
        </div>
      </div>

      {/* THIRD */}
      <div className="flex feature-wrapper-left md:h-[650px]">
        <div className="py-8 md:px-18 lg:aspect-square flex flex-col justify-center">
          <div className="feature-content-wrapper relative px-8 md:px-18">
            <h2 className="text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
              Designed
              <br />
              For Everyone
              <br />
            </h2>
            <p className="mt-5 mb-12 opacity-60 text-[15px] leading-[25px]">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <Link href={""} className="tracking-[2px] text-xs uppercase font-bold">
              View the Stories
            </Link>
          </div>
        </div>
        <div className="w-full h-[295px] md:h-full relative">
          <Image
            src={Videographer}
            fill
            quality={100}
            className="object-cover"
            alt="Designing application on a laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
