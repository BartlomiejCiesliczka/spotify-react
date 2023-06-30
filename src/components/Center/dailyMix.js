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
      {playlist.filter((data) => data.subtype === "DM").slice(0,5).map((data)=>
        <PlaylistSuggestion key={data.id} data={data}/>
      )}
      </div>
    </section>
  )
}


