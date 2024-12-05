import MainScreen from "./MainScreen";
import MovieRow from "./MovieRow";

import fetchListObject from "@/lib/fetchList";

function Home() {
    const fetchList = fetchListObject;
    return (
        <div>
            <MainScreen
                category={fetchList.nowPlaying.category}
                requestedUrl={fetchList.nowPlaying.url}
            />
            <MovieRow
                category={fetchList.topRated.category}
                requestedUrl={fetchList.topRated.url}
            />
            <MovieRow category={fetchList.popular.category} requestedUrl={fetchList.popular.url} />
            <MovieRow
                category={fetchList.upcoming.category}
                requestedUrl={fetchList.upcoming.url}
            />
        </div>
    );
}

export default Home;
