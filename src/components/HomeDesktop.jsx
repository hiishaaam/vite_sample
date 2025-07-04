import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React from "react";
import { ActionSection } from "./ActionSection";
import { CallToActionSection } from "./CallToActionSection";
import { CompanyLogo } from "./CompanyLogo";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { MainContentSection } from "./MainContentSection";
import { VideoGallerySection } from "./VideoGallerySection";
import chevronDown from "./chevron-down.svg";

const navigationItems = [
  { label: "About", hasDropdown: false },
  { label: "What I Do", hasDropdown: false },
  { label: "Impact Stories", hasDropdown: false },
  { label: "Speaking Engagements", hasDropdown: true },
  { label: "Blog", hasDropdown: false },
  { label: "Press", hasDropdown: false },
];

export default function HomeDesktop() {
  return (
    <div className="inline-flex flex-col items-start relative">
      <header className="flex flex-col w-[1000px] h-14 items-center justify-center pr-[var(--spacing-sizing-page-padding-padding-global)] pl-[var(--spacing-sizing-page-padding-padding-global)] py-0 relative bg-color-schemes-color-scheme-1-background">
        <div className="relative w-[966px] h-10 ml-[-47.00px] mr-[-47.00px]">
          <div className="flex w-[84px] items-start absolute top-0.5 left-0">
            <CompanyLogo className="!relative !w-[84px] !h-9" />
          </div>

          <NavigationMenu className="absolute top-2 left-[91px]">
            <NavigationMenuList className="inline-flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <div
                  key={`nav-item-${index}`}
                  className={`inline-flex items-center justify-center gap-1 relative ${item.label === "What I Do" ? "w-[62px]" : "flex-[0_0_auto]"}`}
                >
                  <div
                    className={`relative w-fit mt-[-1.00px] ${item.label === "What I Do" ? "ml-[-3.50px] mr-[-3.50px]" : ""} font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]`}
                  >
                    {item.label}
                  </div>
                  {item.hasDropdown && (
                    <img
                      className="relative w-6 h-6"
                      alt="Chevron down"
                      src={chevronDown}
                    />
                  )}
                </div>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex w-[71px] items-center justify-end gap-4 absolute -top-1 left-[791px]">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-[color:var(--primitives-color-white)] border border-solid border-[color:var(--primitives-color-neutral-darkest)] h-auto rounded-none"
            >
              <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                Join
              </span>
            </Button>
          </div>

          <Button className="inline-flex items-center justify-center gap-2 px-5 py-2 absolute -top-1.5 left-[873px] bg-[color:var(--primitives-color-neutral-darkest)] border border-solid border-[color:var(--primitives-color-neutral-darkest)] h-auto rounded-none">
            <span className="relative w-fit mt-[-1.00px] ml-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
              Contact
            </span>
          </Button>
        </div>
      </header>

      <HeroSection />
      <MainContentSection />
      <VideoGallerySection />
      <ActionSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
}
