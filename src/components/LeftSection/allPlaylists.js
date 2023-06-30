import favSongs from '../../assets/favSongs.png'
import pin from '../../assets/pin.svg'
import { DirectPlaylist } from './directPlaylist'

export function AllPlaylists({filteredPlaylist}){




  return(
    <div className='library-playlist-collection'>
      <ul className='sidebar-playlist'>
        <li className='direct-playlist'>
          <div className='direct-playlist-layout'>
            <div className='direct-playlist-layout-img'>
              <img className='direct-playlist-img' src={favSongs}/>
            </div>
            <div className='direct-playlist-layout-text'>
              <div className='direct-playlist-layout-text-grid'>
                <p className='direct-playlist-name'>
                  Polubione utwory
                </p>
                <div className='direct-playlist-layout-bottom-text'>
                  <img className='fav-tracks' src={pin} />
                  Playlista • 893 utwory
                </div>
              </div>
            </div>
          </div>
        </li>
        {filteredPlaylist.map(data =>
          <DirectPlaylist key={data.id} data={data}/>
        )}
      </ul>
    </div>
  )
}