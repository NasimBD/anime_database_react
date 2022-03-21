import React from 'react'

export const Sidebar = (props) => {
  return (
        <aside>
          <h2>Top Anime</h2>
          <ul>
            {
              props.topAnime && props.topAnime.map((anime, mal_id) => 
                <li key={mal_id}>
                      <a href={anime.url}>{anime.title}</a>
                </li>
              )
            }
          </ul>
        </aside>
          )
}
