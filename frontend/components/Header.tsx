import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <nav className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-10">
            cpa
        </div>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
