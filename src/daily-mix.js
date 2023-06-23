import { ListOfDailyMix } from "./list-of-Daily-Mix";

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
      <ListOfDailyMix playlist={playlist} />
      </div>
    </section>
  )
}