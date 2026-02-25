"use client";

import { useState } from "react";
import SwitchButton from "./switch";

const plans = [
  {
    cardType: "standard",
    planName: "Basic",
    planDesc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthlyPrice: 19,
  },
  {
    cardType: "recommended",
    planName: "Pro",
    planDesc: "More advanced features available. Recommended for photography veterans and professionals.",
    monthlyPrice: 39,
  },
  {
    cardType: "standard",
    planName: "Business",
    planDesc: "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthlyPrice: 99,
  },
];

const PricingCard = ({ cardType, isYearly, planName, planDesc, monthlyPrice }) => {
  return (
    <div
      className={`price-card lg:max-w-[350px] lg:min-h-[410px] px-10 py-10 md:max-lg:h-min flex flex-col justify-center ${cardType == "standard" ? "h-9/10 bg-[#f5f5f5] my-auto text-black" : "relative bg-black text-white"}`}
    >
      {cardType !== "standard" && (
        <div className="gradient-horizotal absolute top-0 left-0"></div>
      )}

      <div className="text-center md:max-lg:text-left md:max-lg:flex md:max-lg:justify-between">
        <div className="md:max-lg:w-[45%]">
          <h2 className={`text-2xl font-bold`}>{planName}</h2>
          <p className={`mt-5 opacity-[60%]`}>{planDesc}</p>
        </div>

        <div className="mt-10 md:max-lg:mt-0">
          <p className="text-[40px] tracking-[4px] font-bold">
            ${monthlyPrice.toFixed(2)}
          </p>
          <span className={`opacity-[60%]`}>{`per ${isYearly ? "year" : "month"}`}</span>
        </div>
      </div>

      <button
        className={`cursor-pointer mt-10 w-full md:max-lg:w-[45%] h-10 tracking-[2px] uppercase text-xs font-semibold ${cardType == "standard" ? "standardBtn" : "recommendedBtn"}`}
      >
        Pick Plan
      </button>
    </div>
  );
};

const Prices = ({}) => {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (monthlyPrice) => {
    return isYearly ? monthlyPrice * 10 : monthlyPrice;
  };

  return (
    <section className="mx-7 my-16 lg:my-30">
      <div className="price-switch flex gap-8 items-center justify-center">
        <span className={`${!isYearly && "font-semibold"}`}>Monthly</span>
        <SwitchButton isOn={isYearly} onClick={() => setIsYearly(!isYearly)} />
        <span className={`${isYearly && "font-semibold"}`}>Yearly</span>
      </div>

      <div className="mt-12 w-fit flex flex-col lg:grid grid-cols-3 min-h-[470px] gap-7 mx-auto">
        {plans.map((plan, idx) => (
          <PricingCard
            key={plan.planName}
            isYearly={isYearly}
            cardType={plan.cardType}
            planName={plan.planName}
            planDesc={plan.planDesc}
            monthlyPrice={getPrice(plan.monthlyPrice)}
          />
        ))}
      </div>
    </section>
  );
};

export default Prices;
