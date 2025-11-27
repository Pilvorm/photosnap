"use client";

import { useState } from "react";
import SwitchButton from "./switch";

const Prices = ({}) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="my-30">
      <div className="price-switch flex gap-8 items-center justify-center">
        <span className={`${!isYearly && "font-semibold"}`}>Monthly</span>
        <SwitchButton
          isOn={isYearly}
          onClick={() => setIsYearly(!isYearly)}
        />
        <span className={`${isYearly && "font-semibold"}`}>Yearly</span>
      </div>
    </section>
  );
};

export default Prices;
