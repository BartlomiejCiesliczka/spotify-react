import { LastListed } from './lastListed'

export function LastPlaylists({playlist}){

  return(
    <section className='last-playlists'>
      <h2 className='last-playlists-greeting'>Dzień Dobry</h2>
      <div className='last-playlist-layout'>
      {playlist.slice(0,6).map((data) =>
        <LastListed key={data.id} data={data}/>
      )}
      </div>
    </section>
  )
}