import { useEffect, useRef } from 'react';

const Player = ({ streamUrl, onClose }) => {
  const playerRef = useRef(null);

  // This effect will handle the Escape key press to close the player
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      ref={playerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300"
    >
      <video
        src={streamUrl}
        controls
        autoPlay
        width="90%"
        height="90%"
        className="max-w-full max-h-full"
        onError={(e) => {
          console.error('Video Error:', e);
          alert('Failed to load video stream.');
        }}
      >
        Your browser does not support the video tag.
      </video>
      <button
        onClick={onClose}
        className="absolute top-5 left-5 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-10"
        aria-label="Close player"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
};

export default Player;