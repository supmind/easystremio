const LIBRARY_KEY = 'stremio_library';

// Helper function to get the library from localStorage
const getLibrary = () => {
  const library = localStorage.getItem(LIBRARY_KEY);
  return library ? JSON.parse(library) : [];
};

// Helper function to save the library to localStorage
const saveLibrary = (library) => {
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
};

// Adds an item to the library
const addToLibrary = (item) => {
  const library = getLibrary();
  if (!library.find(i => i.id === item.id)) {
    const newLibrary = [...library, item];
    saveLibrary(newLibrary);
  }
};

// Removes an item from the library by its ID
const removeFromLibrary = (itemId) => {
  const library = getLibrary();
  const newLibrary = library.filter(i => i.id !== itemId);
  saveLibrary(newLibrary);
};

// Checks if an item is in the library by its ID
const isInLibrary = (itemId) => {
  const library = getLibrary();
  return !!library.find(i => i.id === itemId);
};

export const userLibraryService = {
  getLibrary,
  addToLibrary,
  removeFromLibrary,
  isInLibrary,
};