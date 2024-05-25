import Image from "next/image";

const Logo = () => {
  return (
    <div className=" flex   p-2 bg-purple-600 items-center  text-white rounded ">
      <Image
        src="/logo/logo.svg"
        alt="Logo"
        className="dark:invert"
        width={70}
        height={70}
        priority
      />
      <p className="text-[22px] ">Bookshelf Bazaar</p>
    </div>
  );
};

export default Logo;
