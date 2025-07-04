import { Button } from "./ui/button";
import * as React from "react";
// import { ChevronRight } from "./ChevronRight";
// import placeholderImage from "./placeholder-image.png";

export const MainContentSection = (): React.ReactElement => {
  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-center gap-20 w-full">
          <img
            className="flex-1 grow h-[422.4px] object-cover"
            alt="Aleksei profile"
            src={"https://via.placeholder.com/400x400"}
          />

          <div className="flex flex-col items-start gap-8 flex-1 grow">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="inline-flex items-center">
                <span className="font-heading-tagline text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)]">
                  Aleksei
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="font-heading-h2 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)]">
                  A Journey Through Grief and Art
                </h2>

                <p className="font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                  Hi, I&apos;m Aleksei. I&apos;m an actor, writer, grief advocate, and unapologetically human. I believe in stories that break silence and performances that stay with you long after the curtain falls.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6">
              <Button
                className="px-6 py-3 border border-[color:var(--primitives-color-neutral-darkest)] rounded-none"
              >
                <span className="font-text-regular-normal text-[color:var(--primitives-color-neutral-darkest)]">
                  Learn More
                </span>
              </Button>

              <Button className="p-0">
                <span className="font-text-regular-normal text-[color:var(--primitives-color-neutral-darkest)]">
                  Join
                </span>
                {/* <ChevronRight className="w-6 h-6" /> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
