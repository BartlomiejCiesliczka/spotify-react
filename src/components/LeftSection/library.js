import { LibraryButtons } from "./libraryButtons";
import { LibraryHeader } from "./libraryHeader";
import { LibraryPlaylists } from "./libraryPlaylists";

export function Library ({playlist}){

  const states = {
    playlist: 
      <>
      <li className='direct-playlist'>
        <div className='direct-playlist-layout'>
          <div className='direct-playlist-layout-img'>
            <img className='direct-playlist-img' /*src={favSongs} *//>
          </div>
          <div className='direct-playlist-layout-text'>
            <div className='direct-playlist-layout-text-grid'>
              <p className='direct-playlist-name'>
                Polubione utwory
              </p>
              <div className='direct-playlist-layout-bottom-text'>
                  <svg className='fav-tracks' height="16" width="16" viewBox='0 0 16 16'>
                    <path className='fav-tracks-path' d='M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z'>
                    </path>
                  </svg>
                  Playlista • 893 utwory
              </div>
            </div>
          </div>
        </div>
      </li>
      {playlist.filter((item) => item.type === 'Playlist' || item.type === 'DM' ).map((data) =>
        <a href={data.link}>
          <li key={data.id} className='direct-playlist'>
            <div className='direct-playlist-layout'>
              <div className='direct-playlist-layout-img'>
                <img className='direct-playlist-img' src={data.image}/>
              </div>
              <div className='direct-playlist-layout-text'>
                <div className='direct-playlist-layout-text-grid'>
                  <p className='direct-playlist-name'>
                    {data.name}
                  </p>
                  <div className='direct-playlist-layout-bottom-text'>
                    {data.type} • {data.author}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </a>
      )}
      </>
    ,
    podcast: 
      playlist.filter((item) => item.type === 'Podcast').map((data) =>
        <a href={data.link}>
          <li key={data.id} className='direct-playlist'>
            <div className='direct-playlist-layout'>
              <div className='direct-playlist-layout-img'>
                <img className='direct-playlist-img' src={data.image}/>
              </div>
              <div className='direct-playlist-layout-text'>
                <div className='direct-playlist-layout-text-grid'>
                  <p className='direct-playlist-name'>
                    {data.name}
                  </p>
                  <div className='direct-playlist-layout-bottom-text'>
                    {data.type} • {data.author}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </a>
      )
    ,
    all:
      playlist.map((data) =>
        <a href={data.link}>
          <li key={data.id} className='direct-playlist'>
            <div className='direct-playlist-layout'>
              <div className='direct-playlist-layout-img'>
                <img className='direct-playlist-img' src={data.image}/>
              </div>
              <div className='direct-playlist-layout-text'>
                <div className='direct-playlist-layout-text-grid'>
                  <p className='direct-playlist-name'>
                    {data.name}
                  </p>
                  <div className='direct-playlist-layout-bottom-text'>
                    {data.type} • {data.author}
                  </div>
                </div>
              </div>
            </div>
          </li>
        </a>
      )
  }

let status=states.podcast
  
function chooses(value){
  status = states[value]
  console.log(status)
  return status
}

function refreshPage() {
  window.location.reload(false);
}

  return(
    <div className='library'>
      <LibraryHeader />
      <LibraryButtons states={states} chooses={chooses} refreshPage={refreshPage}/>
      <LibraryPlaylists playlist={playlist} states={states} chooses={chooses} status={status}/>
    </div>
  )
} 