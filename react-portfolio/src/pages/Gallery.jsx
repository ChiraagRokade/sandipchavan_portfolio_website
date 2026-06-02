import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "../data/portfolioData";

export default function Gallery() {
  const [index, setIndex] = useState(null); // Selected image index

  const openLightbox = (idx) => {
    setIndex(idx);
  };

  const closeLightbox = () => {
    setIndex(null);
  };

  const goNext = (e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    setIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    if (index === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Photo Gallery
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Moments from national awards ceremonies, university lectures, industrial collaborations, and student projects.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm cursor-pointer hover:shadow-md hover-lift shrink-0"
              onClick={() => openLightbox(idx)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 12) * 0.03 }}
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-screen Lightbox Modal */}
        <AnimatePresence>
          {index !== null && (
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-110 p-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-colors border border-slate-700/30"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={goPrev}
                className="absolute left-4 p-3 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full transition-colors border border-slate-700/30"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Active Image container */}
              <motion.div
                className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative p-2"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[index].src}
                  alt={galleryImages[index].alt}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-slate-800"
                />
                <span className="text-slate-400 text-xs font-semibold mt-4 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800/50">
                  Image {index + 1} of {galleryImages.length}
                </span>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={goNext}
                className="absolute right-4 p-3 bg-slate-900/60 hover:bg-slate-900 text-white rounded-full transition-colors border border-slate-700/30"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
