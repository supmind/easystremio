const mockData = {
  'tt0111161': {
    id: 'tt0111161',
    name: 'The Shawshank Redemption',
    type: 'movie',
    poster: 'https://picsum.photos/seed/tt0111161/400/600',
    year: '1994',
    imdbRating: '9.3',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  },
  'tt0068646': {
    id: 'tt0068646',
    name: 'The Godfather',
    type: 'movie',
    poster: 'https://picsum.photos/seed/tt0068646/400/600',
    year: '1972',
    imdbRating: '9.2',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
  },
  'tt0468569': {
    id: 'tt0468569',
    name: 'The Dark Knight',
    type: 'movie',
    poster: 'https://picsum.photos/seed/tt0468569/400/600',
    year: '2008',
    imdbRating: '9.0',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  'tt0071562': {
    id: 'tt0071562',
    name: 'The Godfather: Part II',
    type: 'movie',
    poster: 'https://picsum.photos/seed/tt0071562/400/600',
    year: '1974',
    imdbRating: '9.0',
    description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
    director: 'Francis Ford Coppola',
    cast: ['Al Pacino', 'Robert De Niro', 'Robert Duvall'],
  },
  'tt0167260': {
    id: 'tt0167260',
    name: 'The Lord of the Rings: The Return of the King',
    type: 'movie',
    poster: 'https://picsum.photos/seed/tt0167260/400/600',
    year: '2003',
    imdbRating: '8.9',
    description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    director: 'Peter Jackson',
    cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
  },
  'tt5491994': {
    id: 'tt5491994',
    name: 'Planet Earth II',
    type: 'series',
    poster: 'https://picsum.photos/seed/tt5491994/400/600',
    year: '2016',
    imdbRating: '9.5',
    description: 'David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.',
    director: 'N/A',
    cast: ['David Attenborough'],
  },
  'tt0903747': {
    id: 'tt0903747',
    name: 'Breaking Bad',
    type: 'series',
    poster: 'https://picsum.photos/seed/tt0903747/400/600',
    year: '2008-2013',
    imdbRating: '9.5',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
    director: 'Vince Gilligan',
    cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn'],
  },
  'tt0185906': {
    id: 'tt0185906',
    name: 'Band of Brothers',
    type: 'series',
    poster: 'https://picsum.photos/seed/tt0185906/400/600',
    year: '2001',
    imdbRating: '9.4',
    description: 'The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.',
    director: 'N/A',
    cast: ['Scott Grimes', 'Damian Lewis', 'Ron Livingston'],
  },
  'tt7366338': {
    id: 'tt7366338',
    name: 'Chernobyl',
    type: 'series',
    poster: 'https://picsum.photos/seed/tt7366338/400/600',
    year: '2019',
    imdbRating: '9.4',
    description: 'In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world\'s worst man-made catastrophes.',
    director: 'Johan Renck',
    cast: ['Jessie Buckley', 'Jared Harris', 'Stellan Skarsgård'],
  },
  'tt0306414': {
    id: 'tt0306414',
    name: 'The Wire',
    type: 'series',
    poster: 'https://picsum.photos/seed/tt0306414/400/600',
    year: '2002-2008',
    imdbRating: '9.3',
    description: 'The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement officers.',
    director: 'N/A',
    cast: ['Dominic West', 'Lance Reddick', 'Sonja Sohn'],
  },
};

const mockCatalogs = [
  {
    id: 'top_movies',
    name: 'Top Movies',
    items: ['tt0111161', 'tt0068646', 'tt0468569', 'tt0071562', 'tt0167260'].map(id => mockData[id]),
  },
  {
    id: 'top_series',
    name: 'Top Series',
    items: ['tt5491994', 'tt0903747', 'tt0185906', 'tt7366338', 'tt0306414'].map(id => mockData[id]),
  },
];

const mockStreams = [
    { name: 'Torrentio', title: '1080p\nWEB-DL', url: '#' },
    { name: 'Torrentio', title: '720p\nWEB-DL', url: '#' },
    { name: 'The Pirate Bay', title: '1080p\nCAM', url: '#' },
    { name: '1337x', title: '4K\nUHD', url: '#' },
];

export const getCatalogs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCatalogs);
    }, 500);
  });
};

export const getMeta = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mockData[id]) {
        resolve(mockData[id]);
      } else {
        reject(new Error('Metadata not found'));
      }
    }, 700); // Simulate a slightly longer delay
  });
};

export const getStreams = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
        // In a real scenario, streams would depend on the ID
      resolve(mockStreams);
    }, 900); // Simulate an even longer delay
  });
};