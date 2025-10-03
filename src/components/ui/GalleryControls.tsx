import Image from "next/image";
import { MediaType } from "@/types/gallery";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryViewProps = React.HTMLAttributes<HTMLDivElement> & {
  medias: MediaType[];
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  onFullScreen: () => void;
  isFullScreen: boolean;
};

export default function GalleryView({
  medias,
  currentIndex,
  onPrevious,
  onNext,
  onDotClick,
  onFullScreen,
  isFullScreen = false,
}: GalleryViewProps) {
  if (!medias || medias.length === 0) {
    return null;
  }

  const currentMedia = medias[currentIndex];

  return (
    <div
      className={`${
        isFullScreen
          ? "fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          : "relative aspect-[4/3] rounded-xl overflow-hidden bg-surface"
      }`}
      onClick={isFullScreen ? onFullScreen : undefined}
      role="region"
      aria-label="Image gallery"
      aria-live="polite"
    >
      {/* Close or Fullscreen button - 8pt spacing */}
      {isFullScreen ? (
        <button
          onClick={onFullScreen}
          className="absolute right-4 top-4 z-10 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Close fullscreen"
        >
          <X className="w-6 h-6 text-white" aria-hidden="true" />
        </button>
      ) : (
        <button
          onClick={onFullScreen}
          className="absolute right-2 top-2 z-10 p-2 bg-white/80 rounded-lg hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="View fullscreen"
        >
          <Maximize2 className="w-5 h-5 text-foreground" aria-hidden="true" />
        </button>
      )}

      {/* Previous button - 8pt spacing */}
      <button
        onClick={(e) => {
          if (isFullScreen) e.stopPropagation();
          onPrevious();
        }}
        className={`${
          isFullScreen ? "left-4 p-3 bg-black/50" : "left-2 p-2 bg-white/80"
        } absolute top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
        aria-label="Previous image"
      >
        <ChevronLeft
          className={`${isFullScreen ? "w-8 h-8 text-white" : "w-5 h-5 text-foreground"}`}
          aria-hidden="true"
        />
      </button>

      {/* Next button - 8pt spacing */}
      <button
        onClick={(e) => {
          if (isFullScreen) e.stopPropagation();
          onNext();
        }}
        className={`${
          isFullScreen ? "right-4 p-3 bg-black/50" : "right-2 p-2 bg-white/80"
        } absolute top-1/2 -translate-y-1/2 z-10 rounded-full hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
        aria-label="Next image"
      >
        <ChevronRight
          className={`${isFullScreen ? "w-8 h-8 text-white" : "w-5 h-5 text-foreground"}`}
          aria-hidden="true"
        />
      </button>

      {/* Dot indicators - Instagram style with 8pt spacing */}
      <div
        className={`${
          isFullScreen ? "bottom-8 gap-2" : "bottom-4 gap-2"
        } absolute left-1/2 -translate-x-1/2 flex z-10`}
        role="tablist"
        aria-label="Gallery navigation"
      >
        {(() => {
          const dots = [];

          if (medias.length <= 5) {
            // Show all dots if 5 or fewer
            for (let i = 0; i < medias.length; i++) {
              dots.push(
                <button
                  key={i}
                  onClick={(e) => {
                    if (isFullScreen) e.stopPropagation();
                    onDotClick(i);
                  }}
                  className={`${
                    isFullScreen ? "w-2 h-2" : "w-2 h-2"
                  } rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    i === currentIndex
                      ? "bg-primary opacity-100 scale-110"
                      : "bg-foreground opacity-60 hover:opacity-80"
                  }`}
                  role="tab"
                  aria-selected={i === currentIndex}
                  aria-label={`View image ${i + 1} of ${medias.length}`}
                />,
              );
            }
          } else {
            // Instagram logic: always show 5 dots
            let activeIndex;

            if (currentIndex <= 1) {
              activeIndex = currentIndex;
            } else if (currentIndex >= medias.length - 2) {
              activeIndex = 4 - (medias.length - 1 - currentIndex);
            } else {
              activeIndex = 2;
            }

            for (let i = 0; i < 5; i++) {
              dots.push(
                <div
                  key={i}
                  className={`${
                    isFullScreen ? "w-2 h-2" : "w-2 h-2"
                  } rounded-full transition-all duration-200 ease-out ${
                    i === activeIndex
                      ? "bg-primary opacity-100 scale-110"
                      : "bg-foreground opacity-60"
                  }`}
                  role="presentation"
                  aria-hidden="true"
                />,
              );
            }
          }

          return dots;
        })()}
      </div>

      {/* Current image indicator for screen readers */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Image {currentIndex + 1} of {medias.length}
      </div>

      {/* Media content */}
      {isFullScreen ? (
        <div
          className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-12"
          onClick={(e) => e.stopPropagation()}
        >
          {currentMedia.type === "video" ? (
            <video
              key={currentMedia.id}
              src={currentMedia.src}
              className="max-w-full max-h-full object-contain"
              controls
              autoPlay
              loop
              aria-label={currentMedia.alt}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={currentMedia.id}
              src={currentMedia.src}
              alt={currentMedia.alt}
              width={1920}
              height={1080}
              className="max-w-full max-h-full object-contain"
            />
          )}
        </div>
      ) : currentMedia.type === "video" ? (
        <video
          key={currentMedia.id}
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
          controls
          autoPlay
          loop
          muted
          aria-label={currentMedia.alt}
        >
          <source
            src={currentMedia.src}
            type={`video/${currentMedia.extension}`}
          />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          key={currentMedia.id}
          src={currentMedia.src}
          alt={currentMedia.alt}
          priority
          fill
          className="object-contain transition-opacity duration-300"
        />
      )}
    </div>
  );
}
