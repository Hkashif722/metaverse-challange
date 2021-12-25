import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();
  console.log(user);
  return (
    <div className=" sticky top-0 p-5 z-50  bg-black shadow-sm border-2 border-pink-700 text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6  items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid  ">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="http://links.papareact.com/3pi"
          />
        </div>
        <div className="text-left lg:text-center col-span-4 ">
          {/* Avatar  */}
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar />
          </div>
          {/* Welcome Message  */}
          <h1 className=" text-3xl">Welcome to meta-verse</h1>

          {/* username  */}
          <div>
            <h2 className="text-5xl font-bold truncate">
              {user.getUsername()}
            </h2>
          </div>
          {/* change username component  */}
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
