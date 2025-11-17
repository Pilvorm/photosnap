import Link from "next/link";
import Image from "next/image";
import Banner from "./banner";
import { FEATURES_LIST } from "../data";

const Features = ({ display = 6 }) => {
  return (
    <>
      <section className="relative z-10 px-8 py-30 bg-white">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-x-8 gap-y-26 w-fit mx-auto">
          {FEATURES_LIST.slice(0, display).map((feature, idx) => {
            const featureImage = feature.image;

            return (
              <div key={feature.feature} className="">
                <div className="w-18 h-18 flex items-center mx-auto">
                  <Image src={featureImage} alt={feature.image} />
                </div>

                <div className="mt-12 text-center">
                  <h2 className="font-semibold">{feature.feature}</h2>
                  <p className="mt-4 max-w-[350px] text-black/75 text-[15px] leading-[25px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Features;
