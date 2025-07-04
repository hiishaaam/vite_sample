import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import * as React from "react";
// import { CompanyLogo } from "./CompanyLogo";
// import { Facebook } from "./Facebook";
// import { Instagram } from "./Instagram";
// import { LinkedIn } from "./LinkedIn";
// import { X } from "./X";
// import { Youtube } from "./Youtube";
// import divider from "./divider.svg";

export const FooterSection = (): React.ReactElement => {
  const connectLinks = [
    { title: "Watch Reel", href: "#" },
    { title: "Join Community", href: "#" },
    { title: "Book Now", href: "#" },
    { title: "Media Kit", href: "#" },
    { title: "Latest Blog", href: "#" },
  ];

  const followLinks = [
    { title: "Instagram", href: "#" },
    { title: "Twitter", href: "#" },
    { title: "Facebook", href: "#" },
    { title: "YouTube", href: "#" },
    { title: "LinkedIn", href: "#" },
  ];

  const stayUpdatedLinks = [
    { title: "Newsletter", href: "#" },
    { title: "Contact Us", href: "#" },
    { title: "Support", href: "#" },
    { title: "Feedback", href: "#" },
    { title: "Help Center", href: "#" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookies Settings", href: "#" },
  ];

  const socialIcons = [
    // { Icon: Facebook, label: "Facebook" },
    // { Icon: Instagram, label: "Instagram" },
    // { Icon: X, label: "X" },
    // { Icon: LinkedIn, label: "LinkedIn" },
    // { Icon: Youtube, label: "Youtube" },
  ];

  return (
    <footer className="h-[609px] items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-medium)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-medium)] pl-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background flex flex-col relative self-stretch w-full">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] h-[283px] items-start gap-20 relative w-full">
        <div className="relative self-stretch w-full h-[248px]">
          <div className="flex w-[413px] items-start gap-10 absolute top-0 left-0">
            <div className="flex-1 grow flex flex-col items-start relative">
              {/* <CompanyLogo className="!relative !w-[73.25px] !h-9" /> */}
            </div>

            {[connectLinks, followLinks, stayUpdatedLinks].map((group, i) => (
              <div key={i} className="gap-4 flex-1 grow flex flex-col items-start relative">
                <h3 className="font-text-regular-semi-bold text-[color:var(--color-schemes-color-scheme-1-text)]">
                  {["Connect With", "Follow Aleksei", "Stay Updated"][i]}
                </h3>
                <nav className="flex flex-col self-stretch w-full">
                  {group.map((link, idx) => (
                    <a key={idx} href={link.href} className="py-2">
                      <span className="font-text-small-normal text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {link.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Subscribe */}
          <div className="absolute w-[400px] h-[190px] top-0 left-[472px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-text-regular-semi-bold text-[color:var(--color-schemes-color-scheme-1-text)]">
                Subscribe
              </h3>
              <p className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)]">
                Join our newsletter to stay updated on features and releases.
              </p>
            </div>

            <div className="flex flex-col gap-3 absolute top-28 w-[400px]">
              <form className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-3 border border-[color:var(--primitives-color-neutral-darkest)]"
                  required
                />
                <Button
                  type="submit"
                  className="px-6 py-3 border border-[color:var(--primitives-color-neutral-darkest)]"
                >
                  Subscribe
                </Button>
              </form>
              <p className="font-text-tiny-normal text-[color:var(--color-schemes-color-scheme-1-text)]">
                By subscribing, you agree to our Privacy Policy and receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative self-stretch w-full h-14 mb-[-101.00px]">
          <Separator
            className="absolute w-[872px] h-px -top-px left-0"
          />
          <div className="w-[872px] h-6 justify-between absolute top-8 left-0 flex items-start">
            <div className="inline-flex items-center gap-6">
              <p className="font-text-small-normal text-[color:var(--color-schemes-color-scheme-1-text)]">
                © 2024 Aleksei Archer. All rights reserved.
              </p>
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="underline font-text-small-link text-[color:var(--color-schemes-color-scheme-1-text)]"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="inline-flex gap-3">
              {socialIcons.map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label}>
                  {/* <Icon className="!w-6 !h-6" /> */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
