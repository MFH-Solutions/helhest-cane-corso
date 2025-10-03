"use client";
import { useState, useMemo, useEffect } from "react";
import GalleryControls from "./GalleryControls";
import { MediaType } from "@/types/gallery";

type GalleryProps = React.HTMLAttributes<HTMLDivElement> & {
  medias: MediaType[];
};

export default function Gallery({ medias, ...props }: GalleryProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize medias to prevent unnecessary recalculations
  const memoizedMedias = useMemo(() => medias, [medias]);

  // Prevent body scroll when fullscreen is active
  useEffect(() => {
    if (isFullScreen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isFullScreen]);

  // Safety check
  if (!memoizedMedias || memoizedMedias.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? memoizedMedias.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === memoizedMedias.length - 1 ? 0 : prev + 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape" && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullScreen]);

  return (
    <div {...props}>
      {/* Regular Gallery */}
      <GalleryControls
        medias={memoizedMedias}
        currentIndex={currentIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onDotClick={handleDotClick}
        onFullScreen={toggleFullScreen}
        isFullScreen={false}
      />

      {/* Fullscreen Gallery */}
      {isFullScreen && (
        <GalleryControls
          medias={memoizedMedias}
          currentIndex={currentIndex}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onDotClick={handleDotClick}
          onFullScreen={toggleFullScreen}
          isFullScreen={true}
        />
      )}
    </div>
  );
}
