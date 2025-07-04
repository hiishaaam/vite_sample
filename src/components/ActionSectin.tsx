import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import * as React from "react";
// import { AmpStories } from "./AmpStories";
// import { ChevronRight } from "./ChevronRight";
// import { Healing } from "./Healing";

export const ActionSection = (): React.ReactElement => {
  const actionCards = [
    {
      icon: null,
      title:
        "My story is one of resilience, creativity, and heartfelt connection.",
      description:
        "The Mourning Glory initiative supports those navigating the pain of loss.",
      actionText: "Learn More",
    },
    {
      icon: null,
      title: "My journey is a testament to healing through art and community.",
      description:
        "I believe in the power of shared stories to foster understanding.",
      actionText: "Join",
    },
    {
      icon: null,
      title: "Mourning Glory is a safe space for healing and connection.",
      description:
        "Together, we can transform grief into a source of strength.",
      actionText: "Get Involved",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative self-stretch w-full flex-[0_0_auto] bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 relative w-full flex-[0_0_auto]">
        <h2 className="w-[768px] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] relative mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] max-w-[var(--spacing-sizing-max-width-max-width-large)] [font-style:var(--heading-h3-font-style)]">
          Comedy and compassion are sisters. I use one to reveal the other.
        </h2>

        <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="justify-center gap-12 relative self-stretch w-full flex-[0_0_auto] flex items-start">
            {actionCards.map((card, index) => (
              <Card
                key={index}
                className="gap-8 flex flex-col items-start relative flex-1 grow border-none bg-transparent shadow-none"
              >
                <CardContent className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto] p-0">
                  {card.icon}
                  <h3 className="relative self-stretch font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {card.title}
                  </h3>
                  <p className="relative self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] p-0">
                  <Button
                    className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] p-0 h-auto"
                  >
                    <a href="#">
                      <span className="relative w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                        {card.actionText}
                      </span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
