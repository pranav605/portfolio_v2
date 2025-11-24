import { motion } from "motion/react";
import FullScreenModal from '@/components/FullScreenModal';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

// Responsive Carousel Component
const HorizontalCarousel = ({ cardData, initialIndex }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const totalCards = cardData.length;
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [fullscreenSrc, setFullscreenSrc] = useState('');

  const CARD_OFFSET = typeof window !== "undefined"
    ? window.innerWidth < 640 ? 80 : 200
    : 250;

  const goToNext = () => setActiveIndex((p) => (p + 1) % totalCards);
  const goToPrev = () => setActiveIndex((p) => (p - 1 + totalCards) % totalCards);

  const prevIndex = (activeIndex - 1 + totalCards) % totalCards;
  const nextIndex = (activeIndex + 1) % totalCards;
  const cardVariants = {
    center: { x: 0, scale: 1, opacity: 1, zIndex: 10, filter: 'blur(0px)' },
    left: { x: -CARD_OFFSET, scale: 0.85, opacity: 0.4, zIndex: 5, filter: 'blur(2px)' },
    right: { x: CARD_OFFSET, scale: 0.85, opacity: 0.4, zIndex: 5, filter: 'blur(2px)' },
    out: { x: 0, scale: 0.5, opacity: 0, zIndex: 0, filter: 'blur(4px)' }
  };

  return (
    <div className="inline-flex flex-col items-center font-sans h-auto p-0 m-0 w-full">
      <div className="relative w-full max-w-full sm:max-w-4xl flex items-center justify-center overflow-hidden">
        <div className="hidden absolute inset-y-0 w-full md:flex justify-between items-center z-20 pointer-events-none">
          <button onClick={goToPrev} className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm ml-0">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
          <button onClick={goToNext} className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm mr-0">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        {/* Main carousel area */}
        <div className="relative w-full flex justify-center items-center min-h-[320px] sm:min-h-[420px]">
          {cardData.map((card, i) => {
            let styleKey = 'out';
            if (i === activeIndex) styleKey = 'center';
            else if (i === prevIndex) styleKey = 'left';
            else if (i === nextIndex) styleKey = 'right';
            const diff = Math.abs(i - activeIndex);
            if (diff > 1 && diff < totalCards - 1) styleKey = 'out';
            const isMobile = typeof window !== "undefined" ? window.innerWidth < 640 : false;

            return (
              <CarouselCard
                key={card}
                data={card}
                isCenter={i === activeIndex}
                style={cardVariants[styleKey]}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                onClick={() => {
                        setShowFullscreen(true);
                        setFullscreenSrc('/' + card);
                      }
                }
              />
            );
          })}
        </div>
      </div>
      <div className="inset-y-0 w-full gap-2 flex md:hidden justify-center items-center z-20 mt-2">
        <button onClick={goToPrev} className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm -ml-4">
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>
        <button onClick={goToNext} className="p-3 bg-neutral-700/50 hover:bg-neutral-700 rounded-full shadow-lg transition duration-300 pointer-events-auto backdrop-blur-sm -mr-4">
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>
      {/* Fullscreen modal */}
      <FullScreenModal
        open={showFullscreen}
        src={fullscreenSrc}
        onClose={() => setShowFullscreen(false)}
      />
    </div>
  );
};

const CarouselCard = ({ data, isCenter, style, onClick }) => (
  <motion.div
    style={style}
    className="top-0 absolute w-full max-w-xs sm:max-w-md rounded-2xl flex flex-col justify-between items-center transition-all duration-300"
    onClick={onClick}
  >
    <div className="flex items-center justify-center w-full mb-6 cursor-zoom-in">
      <img
        src={'/' + data}
        alt="screenshot"
        className="w-full h-auto rounded-md shadow object-contain max-h-[320px] sm:max-h-[420px]"
      />
    </div>
  </motion.div>
);

export default HorizontalCarousel;