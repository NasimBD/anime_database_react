import { useEffect, useState } from 'react';
import './App.css';
import { AnimeList } from './components/AnimeList';
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { Sidebar } from './components/Sidebar';
import LoadingGif from './assets/images/loading-1.gif';

const TopUrl = `https://api.jikan.moe/v3/top/anime/1/bypopularity`;
const SearchUrl = `https://api.jikan.moe/v3/search/anime`;

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getTopAnime();
  }, [])


  const handleSearchSubmit = async (query) => {
    setLoading(true);
    const data = await fetchAnime(`${SearchUrl}?q=${query}&order_by=title&sort=asc&limit=10`);
    setLoading(false);
    if(data.results) setAnime(data.results);
  }

// Receives data from the API and return a promise of it.
  const fetchAnime = async (url) => {
      const res = await fetch(url);    // Response
      const data = await res.json();  // any
      return data;  // Promise<any>
  }

// Receives data and then sets topAnime. (To use inside useEffect)
  const getTopAnime = async () => {
    const data =  await fetchAnime(TopUrl);   //any
    setTopAnime(data.top.slice(0,8));
    setAnime(data.top.slice(10,18));
}


  return (
    <div className="container">
      <Header/>

      <div id="main">
        <Sidebar topAnime={topAnime}/>
        <div id="content">
            <SearchForm handleSearchSubmit={handleSearchSubmit}/>
            {
              loading ? 
              <img src={LoadingGif} alt="loading..." id="loadingImg"/> : 
              <AnimeList anime={anime}/>
            }
        </div>
      </div>
    </div>
  );
}

export default App;
