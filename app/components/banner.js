import Link from "next/link";

const Banner = ({}) => {
  return (
    <section
      className="relative min-h-[280px] flex flex-col justify-end gap-3 text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(/assets/shared/desktop/bg-beta-alt.jpg)`,
        backgroundPositionY: "80%",
      }}
    >
      <div className="gradient-vertical absolute top-0 left-8 md:left-0"></div>
      <div className="px-8 md:px-40 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2 className="text-[40px] leading-[48px] uppercase font-semibold">
          We're in Beta.
          <br />
          Get Your Invite
          <br />
          Today!
        </h2>
        <Link
          href={""}
          className="tracking-[2px] text-xs uppercase font-semibold"
        >
          Get an Invite
        </Link>
      </div>
    </section>
  );
};

export default Banner;
