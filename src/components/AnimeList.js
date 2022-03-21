import React from 'react'
import { AnimeCard } from './AnimeCard'

export const AnimeList = (props) => {
  return (
<div id="anime-list">
    {
        props.anime.length > 0 ?
        props.anime.map((animeItem, indx) => 
            <AnimeCard key={indx} animeItem={animeItem}/>
        )   :
        <p>No results...</p>
    }
</div>
  )
}
