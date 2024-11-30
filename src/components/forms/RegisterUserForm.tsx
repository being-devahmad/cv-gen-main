import { RegisterUserSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
// import { dummyUser } from "@/constants/dummyuser";
// import { useToast } from "@/hooks/use-toast";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";

type RegisterUserFormData = z.infer<typeof RegisterUserSchema>;

const RegisterUserForm = () => {
  const { register , isLoading } = useAuth();
  // const { toast } = useToast();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const form = useForm<RegisterUserFormData>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = async (values: RegisterUserFormData) => {
    try {
      await register(values.email, values.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  // const onSubmit = async(values: RegisterUserFormData) => {
  //   setIsLoading(true);
  //   try {
  //     // console.log(values);

  //     await register(values.email, values.password);

  //     setTimeout(() => {
  //       setIsLoading(false);
  //       login(dummyUser);

  //       toast({
  //         title: "Account Created Successfully.",
  //         description: "Use your email and password to login again anytime.",
  //       });
  //       navigate(from, { replace: true });
  //     }, 3000);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //     toast({
  //       title: "Error",
  //       description: `Unable to create account right now.`,
  //       variant: "destructive",
  //     });
  //   }
  // };
  return (
    <div className="w-full flex-col flex items-center justify-center ">
      <div className="mb-5 w-full">
        <h2 className="md:text-3xl text-4xl md:mb-2 font-semibold mb-5">
          Create Account
        </h2>
        <p className="text-secondary-text mb-5 text-xs">
          Get access to exclusive features by creating an account
        </p>
      </div>
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-8 lg:gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative items-center ">
                {/* <FormLabel className="">Email</FormLabel> */}
                <div className="w-full">
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      type="email"
                      label="Email"
                      errorMessage={errors.email?.message}
                      isInvalid={!!errors.email?.message}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem className=" relative items-center lg:gap-3">
                {/* <FormLabel>Password</FormLabel> */}
                <div className="w-full">
                  <FormControl>
                    <Input
                      variant="bordered"
                      size="md"
                      label="Password"
                      errorMessage={errors.password?.message}
                      isInvalid={!!errors.password?.message}
                      {...field}
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                          aria-label="toggle password visibility"
                        >
                          {isVisible ? (
                            <EyeOpenIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeClosedIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                    />
                    {/* <Input
                      type="password"
                      icon={<Lock className="h-5 w-5" />}
                      error={!!errors.password}
                      success={!errors.password && dirtyFields.password}
                      placeholder="Password"
                      {...field}
                    /> */}
                  </FormControl>
                  {/* <FormMessage className="mt-1.5 absolute text-xs" /> */}
                </div>
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between mt-10">
            <div></div>

            <Button
              radius="sm"
              className="text-white font-bold hover:bg-button-gpt-hover bg-button-gpt"
              isLoading={isLoading}
              variant="faded"
              type="submit"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>
      <Separator className="mt-10" />
      <div className="flex mt-10 items-center gap-2">
        <p>Already have an account?</p>
        <NavLink
          to={"/login"}
          className={
            "text-button-gpt font-semibold hover:underline transition-all"
          }
        >
          Login here
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterUserForm;
