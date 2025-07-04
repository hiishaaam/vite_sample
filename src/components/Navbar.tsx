import { Button } from "./ui/button";
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuList,
NavigationMenuTrigger,
} from "./ui/navigation-menu";
import React, { useState } from "react";
// import { CompanyLogo } from "./CompanyLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#" },
    { label: "What I Do", href: "#" },
    { label: "Impact Stories", href: "#" },
    {
      label: "Speaking Engagements",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Keynotes", href: "#" },
        { label: "Workshops", href: "#" },
        { label: "Panels", href: "#" },
      ],
    },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ];

  return (
    <header className="flex w-full h-14 items-center justify-center px-[var(--spacing-sizing-page-padding-padding-global)] py-0 bg-color-schemes-color-scheme-1-background">
      <div className="relative w-full max-w-[966px] h-10 flex items-center justify-between">
        <div className="flex items-start">
          {/* <CompanyLogo className="relative w-[84px] h-9" /> */}
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-8">
            {navItems.map((item, index) =>
              item.hasDropdown ? (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <a
                            href={dropdownItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {dropdownItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={index}>
                  <a
                    href={item.href}
                    className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]"
                  >
                    {item.label}
                  </a>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button
            className="h-auto px-5 py-2 bg-[color:var(--primitives-color-white)] border border-solid border-[color:var(--primitives-color-neutral-darkest)] rounded-none"
          >
            <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
              Join
            </span>
          </Button>

          <Button className="h-auto px-5 py-2 bg-[color:var(--primitives-color-neutral-darkest)] border border-solid border-[color:var(--primitives-color-neutral-darkest)] rounded-none">
            <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
              Contact
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
