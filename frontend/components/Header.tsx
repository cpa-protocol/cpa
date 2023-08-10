import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const links = [
  {
    href: "/",
    name: "home",
  },
  {
    href: "/influencer",
    name: "Influencer",
  },
  {
    href: "/protocol",
    name: "Protocol",
  },
];

function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <nav className="container flex items-center justify-between py-2">
        <ul className="flex space-x-2">
          {links.map((link) => (
            <li
              key={link.href}
              className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ConnectButton />
      </nav>
    </header>
  );
}

export default Header;
