import magnifier16 from './../../assets/magnifier16.svg'
import arrowDown from './../../assets/arrowDown.svg'

export function LibraryPlaylistSearchbar(){
  return(
    <div className='library-playlist-searchbar'>
      <button className='library-playlist-searchbar-megnifier-btn'>
        <img src={magnifier16} />
      </button>
      <div className='library-playlist-searchbar-last'>
        <button className='library-playlist-searchbar-last-btn'>
          <span className='library-playlist-searchbar-last-btn-span'>Ostatnie</span>
            <img src={arrowDown} />
        </button>
      </div>
    </div>
  )
}