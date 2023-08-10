import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b">
      <nav className="container flex w-full items-center justify-between py-2 mx-auto">
        <div> cpa </div>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
