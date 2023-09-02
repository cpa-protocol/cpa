import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

function Header() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      let newOpacity = 1 - scrollTop / 300;
      if (newOpacity < 0) newOpacity = 0;
      if (newOpacity > 1) newOpacity = 1;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[1000]" style={{ opacity: opacity }}>
      <nav className="container flex w-full items-center justify-between py-2 mx-auto">
        <Link href="/">
          <div className="flex justify-center content-center items-center">
            <img src={"/logo.png"} className="h-16 w-16" />
            <div className="text-black text-2xl font-bold"> CPA PROTOCOL </div>
          </div>
        </Link>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
