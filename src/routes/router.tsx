import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root";
import ErrorPage from "@/pages/ErrorPage";
import Login from "@/pages/Login";
import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "@/pages/Home";
import About from "@/pages/About";
import RegisterUser from "@/pages/RegisterUser";
// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
// Normal Pages
import Pricing from "@/pages/Pricing";
import ContactUs from "@/pages/ContactUs";
import Faqs from "@/pages/Faqs";
import Reviews from "@/pages/reviews";
import ResetPassword from "@/pages/ResetPassword";
import SelectTemplate from "@/pages/SelectTemplate";
import CreateCv from "@/pages/CreateCv";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/Terms";
import AuthLayout from "./layouts/AuthLayout";
import Resume from "@/pages/Resumes";
import BuilderLandingPage from "@/pages/resume/ResumeOptions";
import ResumeStart from "@/pages/resume/ResumeStart";
import ExperienceForm from "@/components/forms/ResumeForm/ExperienceForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            element: <Login />,
            path: "login",
          },
          {
            element: <ResetPassword />,
            path: "reset-password",
          },
          {
            element: <RegisterUser />,
            path: "create-account",
          },
        ],
      },
      {
        index: true,
        element: <Home />,
      },

      {
        element: <Pricing />,
        path: "pricing",
      },
      {
        element: <ContactUs />,
        path: "contact",
      },
      {
        element: <Reviews />,
        path: "reviews",
      },
      {
        element: <PrivacyPolicy />,
        path: "privacy-policy",
      },
      {
        element: <TermsOfService />,
        path: "terms-and-conditions",
      },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreateCv />
          </ProtectedRoute>
        ),
      },


      {
        path: "select/:id",
        element: (
          <ProtectedRoute>
            <BuilderLandingPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "select/:id/start",
        element: (
          <ProtectedRoute>
            <ResumeStart />
          </ProtectedRoute>
        ),
      },



      {
        element: <Faqs />,
        path: "faqs",
      },
      {
        element: <SelectTemplate />,
        path: "select",
      },

      // {
      //   path: "reset-password",
      //   element: <ResetPassword />,
      // },
      {
        path: "about",
        element: <About />,
      },




      {
        path: "resumes",
        element: <Resume />,
      },

    ],
  },

  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <div>Dashboard users</div>,
      },
      {
        path: "settings",
        element: (
          <div>
            <h2>Dashboard settings</h2>
          </div>
        ),
      },
    ],
  },
]);
