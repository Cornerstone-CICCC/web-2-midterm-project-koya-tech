import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import fetchData from "@/lib/fetchData";
import { MovieRowProps, MovieType } from "@/types";

function MainScreen({ requestedUrl }: MovieRowProps) {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchData(requestedUrl);
                setMovies(data.results);
                setLoading(false);
            } catch (err) {
                // setError(err);
                // setLoading(false);
                console.error(err);
            }
        };

        fetchMovies();
    });

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
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
        </div>
    );
}

export default MainScreen;
