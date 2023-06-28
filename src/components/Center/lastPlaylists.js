import { LastListed } from './lastListed'

export function LastPlaylists({playlist}){

  return(
    <section className='last-playlists'>
      <h2 className='last-playlists-greeting'>Dzień Dobry</h2>
      <div className='last-playlist-layout'>
        <LastListed playlist={playlist}/>
      </div>
    </section>
  )
}