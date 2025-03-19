import { cn } from "@/lib/utils";
import { SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { GoHome, GoHomeFill } from "react-icons/go";

import { CiBasketball } from "react-icons/ci";
import { FaBasketball } from "react-icons/fa6";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
import { SiGithubcopilot } from "react-icons/si";
import { MdOutlineSportsHandball } from "react-icons/md";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "NBA Scores",
    href: "/nba-scores",
    icon: CiBasketball,
    activeIcon: FaBasketball,
  },
  {
    label: "Players Info",
    href: "/players-info",
    icon: MdOutlineSportsHandball,
    activeIcon: MdOutlineSportsHandball,
  },
  {
    label: "Press Conferences",
    href: "/press-conferences",
    icon: IoPeopleOutline,
    activeIcon: IoPeopleSharp,
  },
  {
    label: "Optimization",
    href: "/optimization",
    icon: SiGithubcopilot,
    activeIcon: SiGithubcopilot,
  },
  {
    label: "Optimization-o1",
    href: "/optimize-o1",
    icon: SiGithubcopilot,
    activeIcon: SiGithubcopilot,
  },
  {
    label: "Errors",
    href: "/errors",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
];

export const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
