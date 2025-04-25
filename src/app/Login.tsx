"use client";
import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { FormInput } from "../../components/Form/Input";
import loginImage from "../../public/image.gif";

type LoginProps = {
  isPasswordLogin: boolean;
};

export const Login = ({ isPasswordLogin }: LoginProps) => {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const supabase = getSupabaseBrowserClient();
    const router = useRouter();

   useEffect(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === "SIGNED_IN") {
          router.push("/tickets");
        }
      });
      return () => subscription.unsubscribe();
    }, [router, supabase.auth]);

  return (
    <form
      action={isPasswordLogin ? "/auth/pw-login" : "/auth/magic-link"}
      method="POST"
      onSubmit={(event) => {
        isPasswordLogin && event.preventDefault();

        const email = emailInputRef.current?.value;
        const password = passwordInputRef.current?.value;

        if (isPasswordLogin && email && password) {
          supabase.auth
            .signInWithPassword({
              email,
              password,
            })
            .then((result) => {
              if (result.data?.user) {
                console.log("Hello");
                toast.success("Your login was successful", {
                  style: {
                    background: "#22c55e",
                    color: "white",
                    fontSize: "1.125rem",
                  },
                });
                router.push("/tickets");
              } else {
                toast.error("Please check login details", {
                  style: {
                    background: "#ef4444",
                    color: "white",
                    fontSize: "1.125rem",
                  },
                });
              }
            });
        }
      }}
    >
      <div className="flex justify-between lg:space-x-4 bg-black h-screen p-4 overflow-hidden">
        <div className="w-1/2 hidden lg:block">
          <Image src={loginImage} alt="woman skating" className="size-full object-cover rounded-lg" priority />
        </div>
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
                <FormInput label="Email" id="email" ref={emailInputRef} />

                {isPasswordLogin && (
                  <FormInput
                    label="Password"
                    type="password"
                    id="password"
                    ref={passwordInputRef}
                  />
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
              className="bg-black text-white  font-medium w-full py-4 rounded-xl"
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
