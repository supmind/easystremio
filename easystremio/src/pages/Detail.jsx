import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMeta, getStreams } from '../services/addon.service';
import { userLibraryService } from '../services/userLibrary.service';
import DetailSkeleton from '../components/DetailSkeleton';
import StreamsList from '../components/StreamsList';
import Player from '../components/Player';

const Detail = () => {
  const { id } = useParams();
  const [meta, setMeta] = useState(null);
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playingStream, setPlayingStream] = useState(null);
  const [isInLibrary, setIsInLibrary] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setPlayingStream(null);
      try {
        const [metaData, streamsData] = await Promise.all([
          getMeta(id),
          getStreams(id),
        ]);
        setMeta(metaData);
        setStreams(streamsData);
        setIsInLibrary(userLibraryService.isInLibrary(id));
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handlePlayStream = (streamUrl) => {
    setPlayingStream(streamUrl);
  };

  const handleClosePlayer = () => {
    setPlayingStream(null);
  };

  const handleToggleLibrary = () => {
    if (isInLibrary) {
      userLibraryService.removeFromLibrary(id);
      setIsInLibrary(false);
    } else {
      // Pass a simplified meta object to the library service
      const { id, name, type, poster, year } = meta;
      userLibraryService.addToLibrary({ id, name, type, poster, year });
      setIsInLibrary(true);
    }
  };

  if (loading) {
    return <DetailSkeleton />;
  }

  if (error) {
    return <div className="text-red-500 text-center p-8">Error: {error}</div>;
  }

  if (!meta) {
    return <div className="text-white text-center p-8">Item not found.</div>;
  }

  return (
    <div className="relative">
      {playingStream && (
        <Player streamUrl={playingStream} onClose={handleClosePlayer} />
      )}

      <div
        className={`transition-all duration-500 ease-in-out ${
          playingStream ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex flex-col md:flex-row gap-8 text-white">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={meta.poster} alt={`Poster for ${meta.name}`} className="w-full object-cover" />
              <div className="p-4">
                <h1 className="text-3xl font-bold">{meta.name}</h1>
                <p className="text-gray-400 text-sm mt-1">{meta.year} • ★ {meta.imdbRating}</p>

                <button
                  onClick={handleToggleLibrary}
                  className={`w-full mt-4 font-bold py-2 px-4 rounded transition-colors duration-200 ${
                    isInLibrary
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  {isInLibrary ? 'Remove from Library' : 'Add to Library'}
                </button>

                <p className="mt-4 text-gray-300">{meta.description}</p>
                <div className="mt-4">
                  <p><span className="font-semibold text-gray-400">Director:</span> {meta.director}</p>
                  <p><span className="font-semibold text-gray-400">Cast:</span> {meta.cast.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <StreamsList streams={streams} onPlayStream={handlePlayStream} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;