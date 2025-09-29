const StreamsList = ({ streams, onPlayStream }) => {
  if (!streams || streams.length === 0) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg text-center text-gray-400">
        No streams available.
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Streams</h2>
      <ul className="space-y-2">
        {streams.map((stream, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors duration-200"
          >
            <div className="flex items-center">
              {/* Icon Placeholder */}
              <svg className="w-6 h-6 text-purple-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-white">{stream.name}</p>
                <p className="text-sm text-gray-400 whitespace-pre-wrap">{stream.title}</p>
              </div>
            </div>
            <button
              onClick={() => onPlayStream(stream.url)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamsList;