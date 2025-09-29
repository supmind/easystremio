const mockCatalogs = [
  {
    id: 'top_movies',
    name: 'Top Movies',
    items: [
      {
        id: 'tt0111161',
        name: 'The Shawshank Redemption',
        type: 'movie',
        poster: 'https://picsum.photos/seed/tt0111161/200/300',
        year: '1994',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      },
      {
        id: 'tt0068646',
        name: 'The Godfather',
        type: 'movie',
        poster: 'https://picsum.photos/seed/tt0068646/200/300',
        year: '1972',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      },
      {
        id: 'tt0468569',
        name: 'The Dark Knight',
        type: 'movie',
        poster: 'https://picsum.photos/seed/tt0468569/200/300',
        year: '2008',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      },
      {
        id: 'tt0071562',
        name: 'The Godfather: Part II',
        type: 'movie',
        poster: 'https://picsum.photos/seed/tt0071562/200/300',
        year: '1974',
        description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
      },
      {
        id: 'tt0167260',
        name: 'The Lord of the Rings: The Return of the King',
        type: 'movie',
        poster: 'https://picsum.photos/seed/tt0167260/200/300',
        year: '2003',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      },
    ],
  },
  {
    id: 'top_series',
    name: 'Top Series',
    items: [
      {
        id: 'tt5491994',
        name: 'Planet Earth II',
        type: 'series',
        poster: 'https://picsum.photos/seed/tt5491994/200/300',
        year: '2016',
        description: 'David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.',
      },
      {
        id: 'tt0903747',
        name: 'Breaking Bad',
        type: 'series',
        poster: 'https://picsum.photos/seed/tt0903747/200/300',
        year: '2008-2013',
        description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
      },
      {
        id: 'tt0185906',
        name: 'Band of Brothers',
        type: 'series',
        poster: 'https://picsum.photos/seed/tt0185906/200/300',
        year: '2001',
        description: 'The story of Easy Company of the U.S. Army 101st Airborne Division, and their mission in World War II Europe, from Operation Overlord, through V-J Day.',
      },
      {
        id: 'tt7366338',
        name: 'Chernobyl',
        type: 'series',
        poster: 'https://picsum.photos/seed/tt7366338/200/300',
        year: '2019',
        description: 'In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world\'s worst man-made catastrophes.',
      },
      {
        id: 'tt0306414',
        name: 'The Wire',
        type: 'series',
        poster: 'https://picsum.photos/seed/tt0306414/200/300',
        year: '2002-2008',
        description: 'The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement officers.',
      },
    ],
  },
];

// Simulate an API call
export const getCatalogs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCatalogs);
    }, 500); // Simulate network delay
  });
};