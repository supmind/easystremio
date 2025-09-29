import { useState, useEffect } from 'react';
import { userProgressService } from '../services/userProgress.service';
import HorizontalCatalogRow from '../components/HorizontalCatalogRow';

const Board = () => {
  const [continueWatchingItems, setContinueWatchingItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const items = await userProgressService.getContinueWatching();
        setContinueWatchingItems(items);
      } catch (error) {
        console.error("Failed to fetch continue watching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) {
    // You might want a more specific skeleton for this in a real app
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Board</h1>
      {continueWatchingItems.length > 0 ? (
        <HorizontalCatalogRow title="Continue Watching" items={continueWatchingItems} />
      ) : (
        <div className="text-center text-gray-400 mt-10">
          <p className="text-lg">Nothing to continue watching.</p>
          <p>Start watching something to see it here.</p>
        </div>
      )}
      {/* Other board sections like "New in Library" could be added here */}
    </div>
  );
};

export default Board;