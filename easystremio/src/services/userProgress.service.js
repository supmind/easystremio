// This is a mock service to simulate fetching user's "Continue Watching" list.
// In a real application, this would interact with a backend or a more complex local storage mechanism.

const mockContinueWatching = [
  {
    id: 'tt0903747',
    name: 'Breaking Bad',
    type: 'series',
    poster: 'https://picsum.photos/seed/tt0903747/200/300',
    year: '2008-2013',
    progress: 0.5, // 50% watched
    episode: 'S02E03',
  },
  {
    id: 'tt0468569',
    name: 'The Dark Knight',
    type: 'movie',
    poster: 'https://picsum.photos/seed/tt0468569/200/300',
    year: '2008',
    progress: 0.8, // 80% watched
  },
];

export const userProgressService = {
  getContinueWatching: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockContinueWatching);
      }, 300); // Simulate network delay
    });
  },
};