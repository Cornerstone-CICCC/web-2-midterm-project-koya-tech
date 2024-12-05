import { useEffect, useState } from "react";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import fetchData from "@/lib/fetchData";
import { MovieRowProps, MovieType } from "@/types";

function MovieRow({ category, requestedUrl }: MovieRowProps) {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loading, setLoading] = useState(true);

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
        <>
            <h2 className=" mx-4 font-mono font-bold">{`${category}`}</h2>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="flex w-max space-x-4 p-4">
                    {movies.map((movie) => (
                        <figure key={movie.id} className="shrink-0">
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt={`Photo by ${movie.title}`}
                                    className="object-cover aspect-[3/2]"
                                    width={210}
                                    height={140}
                                />
                            </div>
                            {/* <figcaption className="pt-2 text-xs text-muted-foreground">
                            Photo by{" "}
                            <span className="font-semibold text-foreground">{artwork.artist}</span>
                        </figcaption> */}
                        </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </>
    );
}

export default MovieRow;
