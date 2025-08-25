import Link from "next/link";
import Image from "next/image";
import Responsive from "@/public/assets/features/desktop/responsive.svg";
import Limit from "@/public/assets/features/desktop/no-limit.svg";
import Embed from "@/public/assets/features/desktop/embed.svg";

const featureList = [
  {
    feature: "100% Responsive",
    description:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    image: Responsive,
  },
  {
    feature: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: Limit,
  },
  {
    feature: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    image: Embed,
  }
];

const Features = ({}) => {
  return (
    <section className="px-8 py-30">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8 w-fit mx-auto">
        {featureList.map((feature, idx) => {
          const featureImage = feature.image;

          return (
            <div key={feature.feature} className="">

              <div className="w-18 h-18 flex items-center mx-auto">
                <Image src={featureImage} />
              </div>

              <div className="mt-12 text-center">
                <h2 className="">{feature.feature}</h2>
                <p className="mt-4 max-w-[350px] opacity-60 text-[15px] leading-[25px]">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
