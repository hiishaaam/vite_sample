import { Button } from "./ui/button";
import * as React from "react";

export default function HeroSection(): React.ReactElement {
  return (
    <div className="relative self-stretch w-full h-[900px] bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] w-[560px] h-[265px] items-start gap-20 relative top-[318px] left-20">
        <div className="max-w-[var(--spacing-sizing-max-width-max-width-medium)] w-full flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="font-heading-h1 text-[color:var(--primitives-color-white)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)]">
              Actress. Advocate. Storyteller. Survivor.
            </h1>
            <p className="font-text-medium-normal text-[color:var(--primitives-color-white)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
              I create to connect. I speak to heal.
            </p>
          </div>

          <div className="inline-flex gap-4">
            <Button
              className="px-6 py-3 border border-[color:var(--primitives-color-white)] bg-[color:var(--primitives-color-white)]"
            >
              <span className="font-text-regular-normal text-[color:var(--primitives-color-neutral-darkest)]">
                Watch My Reel
              </span>
            </Button>

            <Button
              className="px-6 py-3 border border-[color:var(--primitives-color-white)]"
            >
              <span className="font-text-regular-normal text-[color:var(--primitives-color-white)]">
                Join Mourning Glory
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
