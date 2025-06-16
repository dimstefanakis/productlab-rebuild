import { Anton } from "next/font/google";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import Image from "next/image";

const anton = Anton({ weight: "400", preload: false });

function Hero() {
  const isLargerThan768 = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <div className="flex w-full py-8 items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          height={24}
          width={100}
          className="h-6 w-auto"
        />
        <div className="flex-1"></div>
        <Link href="#get-in-touch">
          <Button className="rounded-full py-6 bg-black text-white hover:bg-black active:bg-black">
            Contact Us
          </Button>
        </Link>
      </div>
      <h1
        className={`${anton.className} text-5xl md:text-7xl w-full max-w-4xl text-center mt-12 md:mt-24`}
      >
        Unlock Deeper Consumer Transaction Data
      </h1>
      <p className="w-full mt-8 max-w-3xl text-gray-700 text-xl text-center">
        Develop structured intelligence from unstructured data gathered from
        receipts, digital accounts, paychecks, emails, and more — all fully
        permissioned and compiled directly from our active community of end
        consumers.
      </p>
      <Image
        src={isLargerThan768 ? "/dots.png" : "/small-dots.png"}
        alt="dots"
        width={isLargerThan768 ? 800 : 400}
        height={isLargerThan768 ? 200 : 100}
        className="w-full my-8"
      />
    </div>
  );
}

export default Hero;
