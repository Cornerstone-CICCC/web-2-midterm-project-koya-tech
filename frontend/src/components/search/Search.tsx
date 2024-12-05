import { useEffect, useState } from "react";

import Header from "../common/Header";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

import fetchData from "@/lib/fetchData";

interface SearchMovieTypes {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
}

function Search() {
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState<SearchMovieTypes[]>([]);

    const genres = [
        "Anime",
        "Drama",
        "Action and adventure",
        "Romance",
        "Comedy",
        "Horror",
        "Mystery and thrillers",
        "Documentary",
        "Science fiction",
        "Historical",
        "Fantasy",
        "Kids",
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handleInputChange(e as any);
        }
    };

    useEffect(() => {
        if (inputValue) {
            const fetchMovies = async () => {
                try {
                    const data = await fetchData(
                        `https://api.themoviedb.org/3/search/collection?query=${inputValue}`
                    );
                    console.log(data.results);
                    setSearchResults(data.results);
                    // setLoading(false);
                } catch (err) {
                    // setError(err);
                    // setLoading(false);
                    console.error(err);
                }
            };

            fetchMovies();
        }
    }, [inputValue]);

    return (
        <>
            <Header title="Search" />
            <Input
                type="text"
                placeholder="Actor, title, or genre"
                className="mx-8 w-10/12 bg-pvLightGrey font-bold text-pvBlack"
                // onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <div className="mx-8 my-4">
                {searchResults.length > 0 ? (
                    <div>
                        {searchResults.map((item, index) => (
                            <Card key={index} className="flex mb-6 h-32 border-none">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                    alt={item.original_name}
                                    className="w-1/3 object-cover rounded-sm"
                                />
                                <CardContent className="w-2/3 p-4">
                                    <CardTitle>{item.original_name}</CardTitle>
                                    <p className="line-clamp-2 overflow-hidden text-ellipsis">
                                        {item.overview}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <>
                        <h2 className="mx-8 my-4 text-xl font-semibold">Genres</h2>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-6 m-2 mx-8 w-10/12">
                            {genres.map((genre, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center rounded bg-slate-400 dark:bg-pvGrey text-center h-14 px-2 border"
                                    onClick={() => setInputValue(genre)}
                                >
                                    {genre}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Search;
