"use client";

import { useState } from "react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { certifications } from "@/data/certifications";
import { ZoomIn } from "lucide-react";

export function CertificationsGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const certificationImages = certifications.map((cert) => ({
    src: cert.image || "",
    caption: cert.title,
  }));

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className="group bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute top-4 right-4 p-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="label-mono inline-flex items-center gap-1.5 bg-black/50 text-white px-3 py-1.5 text-[10px] mb-2 border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {cert.category}
                </span>
                <h3 className="heading-display text-white text-lg">{cert.title}</h3>
                <p className="text-white/70 text-sm">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ImageLightbox
        images={certificationImages}
        initialIndex={selectedImageIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
}
