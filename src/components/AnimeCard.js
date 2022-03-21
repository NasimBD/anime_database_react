import React from 'react'

export const AnimeCard = (props) => {
  return (
    <div className="anime-wrapper">
        {
           <div className="anime-card">
             <a href={props.animeItem.url}>
                <img src={props.animeItem.image_url} alt={props.animeItem.title}/>
                <h2>{props.animeItem.title}</h2>
             </a>
            </div>
        
        }
    </div>
  )
}
