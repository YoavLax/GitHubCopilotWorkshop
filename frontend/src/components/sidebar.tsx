import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/" className="flex items-center gap-1.5">
        <Image src="/basketball-logo.svg" alt="logo" width={32} height={32} />{" "}
        <br />{" "}
        <span className="bg-[#E5FF00] text-black font-semibold">
          GitHub Copilot Training
        </span>
      </Link>
      <DottedSeparator className="my-4" />

      <Navigation />
    </aside>
  );
};
