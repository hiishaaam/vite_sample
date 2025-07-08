import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import * as React from "react";
// @ts-ignore
import YouTubeIcon from "../assets/you-tube.svg";

export default function VideoGallery() {
  // Video data that could be expanded for multiple videos
  const videos = [
    {
      id: "video1",
      title: "Not Passing on Sherman's Showcase",
      thumbnail: "https://i.ytimg.com/vi/example/maxresdefault.jpg", // Replace with actual thumbnail URL
      platform: "YouTube",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 pt-[var(--spacing-sizing-section-padding-padding-section-large)] pr-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] pl-[var(--spacing-sizing-page-padding-padding-global)] relative bg-white overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <h2 className="relative w-[284px] h-[57px] mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap max-w-[var(--spacing-sizing-max-width-max-width-large)] [font-style:var(--heading-h3-font-style)]">
        Video Gallery
        <br />
        Explore
      </h2>

      <div className="w-full max-w-[768px]">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden border rounded-lg shadow-md"
          >
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-video bg-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      // variant="ghost"
                      // size="icon"
                      className="h-16 w-16 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40"
                      aria-label="Play video"
                    >
                      <YouTubeIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <YouTubeIcon />
                  <span className="font-medium">{video.title}</span>
                </div>
                <Button
                  className="h-10 w-10 rounded-full bg-transparent hover:bg-gray-100"
                  aria-label="More information"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 16V12M12 8H12.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
