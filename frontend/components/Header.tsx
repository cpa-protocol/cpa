import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-40">
      <nav className="container flex w-full items-center justify-between py-2 mx-auto">
           <div className="flex justify-center content-center items-center">
              <img src={'/logo.png'} className="h-16 w-16" />
              <div className="text-black text-2xl font-bold"> CPA PROTOCOL </div>
          </div>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
