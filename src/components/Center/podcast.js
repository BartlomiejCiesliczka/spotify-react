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
      {playlist.filter((data) => data.type === "Podcast").slice(0,5).map((data)=>
        <PlaylistSuggestion key={data.id} data={data}/>
      )}
      </div>
    </section>
  )
}