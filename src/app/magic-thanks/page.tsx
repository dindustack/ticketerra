import Image from "next/image";
import Link from "next/link";
import magicLinkImage from "../../../public/images/light-bulb.gif";

export default function MagicLinkSuccessPage() {
  return (
    // <div className='text-center'>
    //     <h1>Magic on its way!</h1>
    //     Thanks! You should get a link to login in a few seconds.
    //     <br /><br />
    //     <Link role="button" href="/">Go back</Link>

    // </div>

    <div className="flex justify-between lg:space-x-4 bg-black h-screen p-4 overflow-hidden">
      <div className="w-1/2 hidden lg:block">
        <Image
          src={magicLinkImage}
          alt="woman skating"
          className="size-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-full lg:w-1/2 rounded-lg bg-white p-4 md:p-16 h-full">
        <div className="h-[80vh] flex flex-col items-center justify-center my-auto space-y-4 md:space-y-8">
          <div className="flex flex-col space-y-4">
            <h1 className="uppercase font-wagner text-center text-3xl  md:text-[2.5rem] xl:-tracking-[0.125rem] xl:leading-[3.5rem]">
              Magic link <br /> Its on its way
            </h1>
            <p className="text-gray font-bold text-[0.8rem] md:text-[1rem]">
              Your one-stop platform for reporting and tracking issues
              seamlessly. Log in to submit tickets, get real-time updates, and
              connect with support teams effortlessly. With automated tracking
              and instant notifications, resolving issues has never been easier.
              Get started now!
            </p>
          </div>

          <Link
            role="button"
            href="/"
            type="submit"
            className="bg-black px-4 text-ceenter w-[fit-content] text-white font-medium py-4 rounded-xl"
          >
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}
