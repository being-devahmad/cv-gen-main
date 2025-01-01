import { useState } from "react";
import { Button, Card, Checkbox } from "@nextui-org/react";

type PremiumFeatures = {
  monthlyPlan: string[];
  lifetimePlan: string[];
};

type PlanFeatures = string[] | PremiumFeatures;

const PricingPlan = ({
  name,
  price,
  // description,
  features,
  lifetimePrice,
}: {
  name: string;
  price: number;
  description: string;
  features: PlanFeatures;
  lifetimePrice?: number;
}) => {
  const [activeTab, setActiveTab] = useState<"monthly" | "lifetime">("monthly");

  const isPremiumPlan = name === "Premium";

  const currentFeatures = isPremiumPlan
    ? (features as PremiumFeatures)[activeTab === "monthly" ? "monthlyPlan" : "lifetimePlan"]
    : (features as string[]);

  const currentPrice = isPremiumPlan
    ? activeTab === "monthly"
      ? price
      : lifetimePrice
    : price;

  let bgColor, textColor, checkboxColor, buttonBg, monthlyTabBg, lifetimeTabBg;

  if (name === "Premium") {
    bgColor = "bg-black";
    textColor = "text-white";
    checkboxColor = "text-white";
    buttonBg = "bg-white text-black font-semibold";
    monthlyTabBg = "bg-gray-200 text-black font-semibold";
    lifetimeTabBg = "bg-gray-300 text-black font-semibold"
  } else {
    bgColor = "bg-white";
    textColor = "text-black";
    checkboxColor = "text-black";
    buttonBg = "bg-black text-white font-semibold";
  }

  return (
    <Card className={`md:p-5 w-full p-4 ${bgColor} ${textColor}`} shadow="lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="w-full mt-4">
        {isPremiumPlan && (
          <div className={`flex justify-center mb-4 `}>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-l ${activeTab === "monthly" ? `${monthlyTabBg}` : `${lifetimeTabBg}`
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("lifetime")}
              className={`px-4 py-2 text-sm font-medium rounded-r ${activeTab === "lifetime" ? `${monthlyTabBg}` : `${lifetimeTabBg}`
                }`}
            >
              Lifetime
            </button>
          </div>
        )}
        <div>
          <span className="text-3xl mr-2 font-bold">€{currentPrice}</span>
        </div>
        <Button className={`${buttonBg} shadow-lg mt-4`} fullWidth size="sm">
          Get Started
        </Button>
      </div>
      <div className="w-full h-fit mt-10 mb-6 border border-dashed"></div>
      <ul>
        {currentFeatures.map((feature: string, index: number) => (
          <div className="flex mb-2" key={index}>
            <Checkbox
              defaultSelected
              isDisabled
              size="sm"
              color="secondary"
              classNames={{
                label: `${checkboxColor} opacity-100`,
              }}
              className="text-secondary-text"
            ></Checkbox>
            <span className="text-xs">{feature}</span>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default PricingPlan;
