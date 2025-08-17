import Link from "next/link";

const Stories = ({}) => {
  return (
    <section className="mb-20 w-full grid grid-cols-4">
      {/* First */}
      <div className="stories stories-mountains h-[650px] p-10 flex flex-col justify-end gap-3 text-white">
        <div className="w-full flex flex-col gap-1">
          <h3 className="text-lg font-bold">The Mountains</h3>
          <p className="text-[13px]">by John Appleseed</p>
        </div>
        <div className="stories-divider"></div>
        <div>
          <Link
            href={""}
            className="tracking-[2px] text-xs uppercase font-bold"
          >
            View the Stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stories;
