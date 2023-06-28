import { ListOfPodcast } from "./listOfPodcast";

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
      <ListOfPodcast playlist={playlist} />
      </div>
    </section>
  )
}