import AuthCarousel from "@/components/AuthCarousel";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import PaddingContainer from "@/components/PaddingContainer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <MaxWidthContainer className="max-w-7xl">
      <PaddingContainer className="py-10 lg:py-0">
        <div className="grid md:grid-cols-2 gap-12 md:h-screen">
          <Outlet />
          <AuthCarousel />
        </div>
      </PaddingContainer>
    </MaxWidthContainer>
  );
};

export default AuthLayout;
