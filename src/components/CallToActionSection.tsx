import { Button } from "./ui/button";
import * as React from "react";

export default function CallToActionSection(): React.ReactElement {
  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 relative w-full flex-[0_0_auto]">
        <div className="max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-8 w-full flex-[0_0_auto] flex flex-col items-start relative">
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="self-stretch text-[color:var(--primitives-color-white)] text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
              Take Action with Aleksei
            </h2>

            <p className="relative self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Explore my journey, join the community, and book me for your next
              event.
            </p>
          </div>

          <div className="inline-flex items-start gap-4 relative flex-[0_0_auto]">
            <Button
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-[color:var(--primitives-color-white)] border border-solid border-[color:var(--primitives-color-white)] rounded-none"
            >
              <span className="relative w-fit mt-[-1.00px] ml-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                Watch
              </span>
            </Button>

            <Button
              className="h-auto inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] border border-solid border-[color:var(--primitives-color-white)] bg-transparent rounded-none"
            >
              <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                Join
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
