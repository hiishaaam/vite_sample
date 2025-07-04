import * as React from "react";

export const VideoGallerySection = (): React.ReactElement => {
  const videoImage =
    "https://c.animaapp.com/VideoGallerySection/image.png";

  const featureItems = [
    {
      title: "Healing Through Art",
      description:
        "I create performances that resonate, offering both laughter and solace to my audience.",
    },
    {
      title: "Empowerment & Purpose",
      description:
        "My journey has taught me that vulnerability is the key to authentic connection.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] w-full bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        <div className="flex items-center gap-20 w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h3 className="text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] tracking-[var(--heading-h3-letter-spacing)] [font-style:var(--heading-h3-font-style)]">
                Transforming Grief into Strength: My Journey as an Advocate and Performer
              </h3>
              <p className="font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                After losing my father to suicide, I founded Mourning Glory, a free support initiative for survivors. My grief has not only shaped my art but also fueled my mission to help others heal.
              </p>
            </div>

            <div className="flex gap-6 w-full">
              {featureItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 flex-1">
                  <h6 className="font-heading-h6 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] font-[number:var(--heading-h6-font-weight)] [font-style:var(--heading-h6-font-style)]">
                    {item.title}
                  </h6>
                  <p className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <img
            className="flex-1 h-[422.4px] object-cover"
            alt="Aleksei performing on stage"
            src={videoImage}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;
