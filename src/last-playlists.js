import { LastPlaylist } from './last-playlist'

export function LastPlaylists({playlist}){

  return(
    <section className='last-playlists'>
      <h2 className='last-playlists-greeting'>Dzień Dobry</h2>
      <div className='last-playlist-layout'>
        <LastPlaylist playlist={playlist}/>
      </div>
    </section>
  )
}