import { PlaylistSuggestion } from "./playlistSuggestion";

export function DailyMix({playlist}){

  return(
    <section className='random-playlist'>
      <div className='random-playlist-header'>
        <div className='random-playlist-name'>
          Przygotowano dla Bartłomiej Cieśliczka
        </div>
        <div className='random-playlist-show-all'>Pokaż wszystko</div>
      </div>
      <div className='random-playlist-container'>
      <PlaylistSuggestion playlist={playlist} type={"DM"}/>
      </div>
    </section>
  )
}