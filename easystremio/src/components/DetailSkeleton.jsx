const DetailSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 text-white animate-pulse">
      {/* Left Column: Metadata Skeleton */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="bg-gray-800 p-4 rounded-lg">
          {/* Poster Skeleton */}
          <div className="aspect-[2/3] bg-gray-700 rounded"></div>
          {/* Title Skeleton */}
          <div className="h-8 bg-gray-700 rounded mt-4 w-3/4"></div>
          {/* Year/Info Skeleton */}
          <div className="h-4 bg-gray-700 rounded mt-2 w-1/2"></div>
          {/* Description Skeleton */}
          <div className="h-4 bg-gray-700 rounded mt-6 w-full"></div>
          <div className="h-4 bg-gray-700 rounded mt-2 w-full"></div>
          <div className="h-4 bg-gray-700 rounded mt-2 w-5/6"></div>
        </div>
      </div>

      {/* Right Column: Streams List Skeleton */}
      <div className="w-full md:w-2/3">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-transparent bg-gray-700 rounded w-1/3"></h2>
          {/* Stream Item Skeleton */}
          <div className="h-12 bg-gray-700 rounded mt-4"></div>
          <div className="h-12 bg-gray-700 rounded mt-4"></div>
          <div className="h-12 bg-gray-700 rounded mt-4"></div>
          <div className="h-12 bg-gray-700 rounded mt-4"></div>
          <div className="h-12 bg-gray-700 rounded mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;