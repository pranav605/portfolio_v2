import { XMarkIcon } from "@heroicons/react/24/outline";

// Fullscreen modal component
export default function FullscreenModal({ open, src, onClose }){
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm bg-opacity-95"
      style={{ touchAction: 'none' }} // Prevent background scrolling
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-neutral-800/70 rounded-full z-60"
        type="button"
      >
        <XMarkIcon className="w-7 h-7 text-white" />
      </button>
      <img
        src={src}
        alt="fullscreen"
        className="object-contain max-h-full max-w-full w-full h-full"
        style={{
          pointerEvents: 'none', // Prevent image from blocking background click
        }}
      />
    </div>
  );
};
