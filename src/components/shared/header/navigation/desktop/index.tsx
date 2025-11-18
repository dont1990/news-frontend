"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { INavItem } from "@/constants/navigation/types/nav-items";

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10, x: 20 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

type Props = {
  navItems: INavItem[];
};

export default function DesktopNav({ navItems }: Props) {
  const pathName = usePathname();

  return (
    <NavigationMenu className="hidden md:flex mx-auto">
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="flex"
      >
        <NavigationMenuList className="flex items-center gap-x-1 py-3">
          {navItems.map((navItem) => {
            const Icon = navItem.icon;
            const isActive = Boolean(pathName === navItem.path);

            return (
              <motion.div key={navItem.title} variants={itemVariants}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`group/nav px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300 relative flex items-center gap-2 ${
                      isActive ? "text-gray-900 bg-primary/10" : "text-gray-500"
                    }`}
                  >
                    <Link href={navItem.path}>
                      <Icon className="w-5 h-5 group-hover/nav:text-primary transition-colors" />
                      <span>{navItem.title}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/nav:w-full"></span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </motion.div>
            );
          })}
        </NavigationMenuList>
      </motion.div>
    </NavigationMenu>
  );
}
