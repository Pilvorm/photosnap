import Link from "next/link";
import Image from "next/image";
import Features from "../components/features";
import Sunset from "@/public/assets/pricing/desktop/hero-alt.jpg";
import SwitchButton from "../components/switch";

import Prices from "../components/prices";

export default function Pricing() {

  return (
    <>
      {/* Hero */}
      <section className="">
        {/* First */}
        <div className="flex feature-wrapper-left md:min-h-[650px]">
          <div className="max-md:relative py-16 lg:aspect-square bg-black flex flex-col justify-center text-white">
            <div className="feature-content-wrapper md:relative px-8 md:px-28">
              <div className="gradient-vertical absolute top-0 left-8 md:left-0"></div>

              <h2 className="text-[32px] md:text-[40px] tracking-[3.5px] leading-[48px] uppercase font-bold">
                Pricing
              </h2>
              <p className="mt-5 mb-12 text-white/75 text-[15px] leading-[25px]">
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </div>
          <div className="w-full h-[295px] md:h-full relative">
            <Image
              src={Sunset}
              fill
              quality={100}
              className="object-cover"
              alt="Woman setting a camera on a tripod"
            />
          </div>
        </div>
      </section>
      <Prices/>
    </>
  );
}
