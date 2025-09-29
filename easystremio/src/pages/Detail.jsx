import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Detail Page</h1>
      <p>Showing details for item with ID: <span className="font-mono bg-gray-700 px-2 py-1 rounded">{id}</span></p>
      <p>This page will show metadata on the left and a list of streams on the right.</p>
    </div>
  );
};

export default Detail;