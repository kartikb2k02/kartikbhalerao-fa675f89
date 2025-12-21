import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  images: { src: string; caption: string }[];
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ImageLightbox = ({
  images,
  initialIndex,
  open,
  onOpenChange,
}: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onOpenChange(false);
  };

  // Reset to initial index when opening
  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
    onOpenChange(isOpen);
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-none bg-background/95 backdrop-blur-xl"
        onKeyDown={handleKeyDown}
      >
        <div className="relative flex flex-col items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50 bg-background/80 hover:bg-background"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background h-12 w-12"
                onClick={handlePrevious}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background h-12 w-12"
                onClick={handleNext}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Image */}
          <img
            src={currentImage.src}
            alt={currentImage.caption}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
          />

          {/* Caption and Counter */}
          <div className="p-4 text-center">
            <p className="text-foreground font-medium mb-1">
              {currentImage.caption}
            </p>
            <p className="text-muted-foreground text-sm">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
