const fetchListObject = {
    topRated: {
        category: "Top Rated",
        url: "https://api.themoviedb.org/3/movie/top_rated",
    },
    popular: {
        category: "Popular",
        url: "https://api.themoviedb.org/3/movie/popular",
    },
    upcoming: {
        category: "Upcoming",
        url: "https://api.themoviedb.org/3/movie/upcoming",
    },
    nowPlaying: {
        category: "Now Playing",
        url: "https://api.themoviedb.org/3/movie/now_playing",
    },
};

export default fetchListObject;
