import PosterCard from './PosterCard';

const HorizontalCatalogRow = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4 px-4">{title}</h2>
      <div className="flex overflow-x-auto pb-4 -mx-2 px-4">
        {items.map((item) => (
          <PosterCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCatalogRow;