import Link from "next/link";
import Image from "next/image";

const Hero = ({ title, description, linkText, url, heroImg, imgAlt }) => {
  return (
    <div className="flex feature-wrapper-left md:min-h-[650px]">
      <div className="max-md:relative py-16 lg:aspect-square bg-black flex flex-col justify-center text-white">
        <div className="feature-content-wrapper md:relative px-8 md:px-28">
          <div className="gradient-vertical absolute top-0 left-8 md:left-0"></div>

          <h2 className="text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
            {title}
          </h2>
          <p className="mt-5 mb-12 text-white/75 text-[15px] leading-[25px]">
            {description}
          </p>
          {linkText && (
            <Link
              href={url}
              className="tracking-[2px] text-xs uppercase font-semibold"
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
      <div className="w-full h-[295px] md:h-full relative">
        <Image
          src={heroImg}
          fill
          quality={100}
          className="object-cover"
          alt={imgAlt}
        />
      </div>
    </div>
  );
};

export default Hero;
