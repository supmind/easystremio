import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMeta, getStreams } from '../services/addon.service';
import DetailSkeleton from '../components/DetailSkeleton';
import StreamsList from '../components/StreamsList';

const Detail = () => {
  const { id } = useParams();
  const [meta, setMeta] = useState(null);
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [metaData, streamsData] = await Promise.all([
          getMeta(id),
          getStreams(id),
        ]);
        setMeta(metaData);
        setStreams(streamsData);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
    <div className="flex flex-col md:flex-row gap-8 text-white">
      {/* Left Column: Metadata */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <img src={meta.poster} alt={`Poster for ${meta.name}`} className="w-full object-cover" />
          <div className="p-4">
            <h1 className="text-3xl font-bold">{meta.name}</h1>
            <p className="text-gray-400 text-sm mt-1">{meta.year} • ★ {meta.imdbRating}</p>
            <p className="mt-4 text-gray-300">{meta.description}</p>
            <div className="mt-4">
              <p><span className="font-semibold text-gray-400">Director:</span> {meta.director}</p>
              <p><span className="font-semibold text-gray-400">Cast:</span> {meta.cast.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Streams List */}
      <div className="w-full md:w-2/3">
        <StreamsList streams={streams} />
      </div>
    </div>
  );
};

export default Detail;