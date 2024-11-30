import MaxWidthContainer from "@/components/MaxWidthContainer";
import PaddingContainer from "@/components/PaddingContainer";
import Heading from "./Heading";
import PricingPlan from "@/components/cards/PricingPlan";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";

const Pricing = () => {
  return (
    <div className="pb-32">
      <PaddingContainer className="py-10 md:py-20">
        <div className="text-center">
          <Heading className="">Budget-friendly pricing alternatives</Heading>
          <p className="text-secondary-text">
            Get started free or upgrade to share your impact for all completed
            tasks with multiple people
          </p>
        </div>
      </PaddingContainer>
      {/* <MaxWidthContainer>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-col md:w-3/5 flex gap-3">
            <PricingCard price="0" isMostPopular={false} planName="Starter" />
            <PricingCard price={"600"} isMostPopular planName="Standard" />
          </div>
          <ContactCard />
        </div>
      </MaxWidthContainer> */}
      <MaxWidthContainer className="max-w-[1050px]">
        <div className="grid gap-3 lg:grid-cols-3 sm:grid-cols-2">
          {subscriptionTiersInOrder.map((tier) => {
            return <PricingPlan key={tier.price} {...tier} />;
          })}
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default Pricing;
