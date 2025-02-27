"use client"
import Link from "next/link";
import { FormInput } from "../../components/Form/Input";

type LoginProps = {
  isPasswordLogin: boolean;
};

export const Login = ({ isPasswordLogin }: LoginProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (isPasswordLogin) {
          alert("User wants to login with password");
        } else {
          alert("User wants to login with magic link");
        }
      }}
    >
      <div className="flex justify-between bg-black h-screen p-4 overflow-hidden">
        <div className="w-1/2 hidden lg:block"></div>
        <div className="md:w-full lg:w-1/2 rounded-lg bg-white p-4 md:p-16 h-full">
          <div className="h-[80vh] flex flex-col justify-center my-auto space-y-4 md:space-y-8">
            <div className="flex flex-col space-y-4">
              <h1 className="uppercase font-wagner text-center text-3xl  md:text-[2.5rem] xl:-tracking-[0.125rem] xl:leading-[3.5rem]">
                Effortless Issue <br /> Reporting and Tracking
              </h1>
              <p className="text-gray font-bold text-[0.8rem] md:text-[1rem]">
                Your one-stop platform for reporting and tracking issues
                seamlessly. Log in to submit tickets, get real-time updates, and
                connect with support teams effortlessly. With automated tracking
                and instant notifications, resolving issues has never been
                easier. Get started now!
              </p>
            </div>

            <fieldset>
              <div className="flex flex-col mt-8 space-y-8">
                <FormInput label="Email" id="email" />

                {isPasswordLogin && (
                  <FormInput label="Password" type="password" id="password" />
                )}
              </div>
            </fieldset>

            <div className="flex justify-end">
              <p className="font-bold">
                {isPasswordLogin ? (
                  <Link
                    href={{
                      pathname: "/",
                      query: { magicLink: "yes" },
                    }}
                  >
                    Go to Magic Link Login
                  </Link>
                ) : (
                  <Link
                    href={{
                      pathname: "/",
                      query: { magicLink: "no" },
                    }}
                  >
                    Go to Password Login
                  </Link>
                )}
              </p>
            </div>
            <button
              type="submit"
              className="bg-black text-white w-full py-4 rounded-xl"
            >
              {`Sign in with `}
              {isPasswordLogin ? "Password" : "Magic Link"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
