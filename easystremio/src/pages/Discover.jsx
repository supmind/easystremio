import { useState, useEffect } from 'react';
import { getCatalogs } from '../services/addon.service';
import HorizontalCatalogRow from '../components/HorizontalCatalogRow';

const Discover = () => {
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const data = await getCatalogs();
        setCatalogs(data);
      } catch (error) {
        console.error("Failed to fetch catalogs:", error);
        // Handle error state if necessary
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogs();
  }, []);

  if (loading) {
    return <div className="text-white text-center p-8">Loading...</div>;
  }

  return (
    <div>
      {catalogs.map((catalog) => (
        <HorizontalCatalogRow
          key={catalog.id}
          title={catalog.name}
          items={catalog.items}
        />
      ))}
    </div>
  );
};

export default Discover;