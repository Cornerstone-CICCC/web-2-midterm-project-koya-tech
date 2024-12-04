import axios from "axios";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../ui/carousel";

interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

function MainScreen() {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming", {
                    params: {
                        language: "en-US",
                        page: 1,
                    },
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`,
                    },
                });

                setMovies(response.data.results);
                setLoading(false);
            } catch (err) {
                // setError(err);
                // setLoading(false);
                console.error(err);
            }
        };

        fetchUpcomingMovies();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent>
                    {movies.map((movie) => (
                        <CarouselItem key={movie.id}>
                            <div className="py-4">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt={movie.title}
                                    className="w-full max-h-80 object-contain"
                                />
                                {/* <h2 className="mt-1 mr-3 text-end italic">{movie.title}</h2> */}
                                {/* <p className="text-center text-sm text-gray-500">
                                    {movie.release_date}
                                </p> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default MainScreen;
