import Image from "next/image";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <Image
        src="/home/book-bg-secondry.png"
        alt="home bg-image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="z-10 bg-black rounded-full p-4">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/logo/logo.svg"
          alt="Logo"
          className="dark:invert"
          width={100}
          height={100}
          priority
        />
        <Link href="/store" className="bg-black rounded-full hover:scale-110 transform transition">
            <ChevronDoubleRightIcon className="w-20 h-20 text-white" />
        </Link>
      </div>
    </div>
    </div>
  );
}

ChevronDoubleRightIcon;
