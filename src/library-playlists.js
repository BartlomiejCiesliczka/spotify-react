import favSongs from './favSongs.png'

export function LibraryPlaylists(){
  
  return(
    <div className='library-playlist'>
      <div className='library-playlist-searchbar'>
        <button className='library-playlist-searchbar-megnifier-btn'>
          <svg height='16' width='16' viewBox='0 0 16 16' >
            <path d='M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z'></path>
          </svg>
        </button>
        <div className='library-playlist-searchbar-last'>
          <button className='library-playlist-searchbar-last-btn'>
            <span className='library-playlist-searchbar-last-btn-span'>Ostatnie</span>
            <svg height='16' width='16' viewBox='0 0 16 16'>
              <path d='m14 6-6 6-6-6h12z'></path>
            </svg>
          </button>
        </div>
      </div>
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
          <li className='direct-playlist'>
            <div className='direct-playlist-layout'>
              <div className='direct-playlist-layout-img'>
                <img className='direct-playlist-img' src={favSongs}/>
              </div>
              <div className='direct-playlist-layout-text'>
                <div className='direct-playlist-layout-text-grid'>
                  <p className='direct-playlist-name'>
                    RUNNING Music Hits 2023 🏃‍♂️
                  </p>
                  <div className='direct-playlist-layout-bottom-text'>
                  Playlista • OneSevenMusic
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className='direct-playlist'>
            <div className='direct-playlist-layout'>
              <div className='direct-playlist-layout-img'>
                <img className='direct-playlist-img' src={favSongs}/>
              </div>
              <div className='direct-playlist-layout-text'>
                <div className='direct-playlist-layout-text-grid'>
                  <p className='direct-playlist-name'>
                    Kitchen dance party at 23:38
                  </p>
                  <div className='direct-playlist-layout-bottom-text'>
                    Playlista • Bartłomiej Cieśliczka
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}