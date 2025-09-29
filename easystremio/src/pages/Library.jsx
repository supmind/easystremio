import { useState, useEffect } from 'react';
import { userLibraryService } from '../services/userLibrary.service';
import PosterCard from '../components/PosterCard';

const Library = () => {
  const [libraryItems, setLibraryItems] = useState([]);

  // Function to load items from the library
  const loadLibraryItems = () => {
    setLibraryItems(userLibraryService.getLibrary());
  };

  useEffect(() => {
    loadLibraryItems();

    // A simple way to ensure the library is up-to-date when the user navigates back.
    // In a real-world app, a more robust state management solution would be better.
    window.addEventListener('focus', loadLibraryItems);

    return () => {
      window.removeEventListener('focus', loadLibraryItems);
    };
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">My Library</h1>
      {libraryItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {libraryItems.map(item => (
            <PosterCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-10">
          <p className="text-lg">Your library is empty.</p>
          <p>Add movies and series from their detail pages to see them here.</p>
        </div>
      )}
    </div>
  );
};

export default Library;