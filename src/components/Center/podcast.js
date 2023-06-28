import { PlaylistSuggestion } from "./playlistSuggestion";

export function Podcast({playlist}){

  return(
    <section className='random-playlist'>
      <div className='random-playlist-header'>
        <div className='random-playlist-name'>
          Twoje programy
        </div>
        <div className='random-playlist-show-all'>Pokaż wszystko</div>
      </div>
      <div className='random-playlist-container'>
      <PlaylistSuggestion playlist={playlist} type={"Podcast"}/>
      </div>
    </section>
  )
}