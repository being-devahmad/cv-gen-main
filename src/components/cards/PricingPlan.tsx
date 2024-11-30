import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { Button, Card, Checkbox } from "@nextui-org/react";

const PricingPlan = ({
  name,
  price,
  description,
  features,
}: (typeof subscriptionTiersInOrder)[number]) => {
  let bgColor, textColor, checkboxColor, buttonBg;

  if (name === "Teams") {
    bgColor = "bg-black";
    textColor = "text-white";
    checkboxColor = "text-white";
    buttonBg = "bg-white text-black font-semibold";
  } else {
    bgColor = "bg-white";
    textColor = "text-black";
    checkboxColor = "text-black";
    buttonBg = "bg-black text-white font-semibold";
  }

  return (
    <Card className={`md:p-5 w-full p-4 ${bgColor}  ${textColor}`} shadow="lg">
      <h2>{name}</h2>
      <div className="w-full ">
        <span className="text-xs">Starts at</span>
        <div>
          <div>
            <span className="text-3xl mr-2 font-bold">${price / 100}</span>
            <span className="text-xs">per month</span>
          </div>
          <p className="text-xs my-3">{description}</p>
        </div>
        <Button className={`${buttonBg}  shadow-lg`} fullWidth size="sm">
          Get Started
        </Button>
      </div>
      <div className="w-full h-fit mt-10 mb-6 border border-dashed"></div>
      <ul className="">
        {features.map((feature: string, index: number) => (
          <div className="flex  mb-2" key={index}>
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
