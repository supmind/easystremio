import { Link } from 'react-router-dom';

const PosterCard = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <Link to={`/detail/${item.id}`} className="block group relative flex-shrink-0 w-40 mx-2">
      <div className="relative rounded-lg overflow-hidden aspect-[2/3]">
        {/* Poster Image */}
        <img
          src={item.poster}
          alt={`Poster for ${item.name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-4 text-white">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="text-sm text-gray-300">{item.year}</p>
          <p className="mt-2 text-xs text-gray-400 flex-grow overflow-hidden">
            {item.description}
          </p>
          <div className="mt-auto">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking the button
                console.log(`Add ${item.name} to library`);
              }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Add to Library
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PosterCard;