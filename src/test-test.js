Library

import { LibraryButtons } from "./library-buttons";
import { LibraryHeader } from "./library-header";
import { LibraryPlaylists } from "./library-playlists";

export function Library ({playlist}){

  const states = {
    playlist: `
      <>
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
      {playlist.filter((item) => item.type === 'Playlist').map((data, index) =>
        <a href={data.link}>
          <li key={index} className='direct-playlist'>
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
    `,
    podcast: `
    {playlist.filter((item) => item.type === 'Podcast').map((data, index) =>
      <a href={data.link}>
        <li key={index} className='direct-playlist'>
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
    `,
    all:
      `{playlist.map((data, index) =>
        <a href={data.link}>
          <li key={index} className='direct-playlist'>
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
      )}`
  }

  const chooses = status =>(
    <> {states[status]} </>
  )

  return(
    <div className='library'>
      <LibraryHeader />
      <LibraryButtons states={states} chooses={chooses}/>
      <LibraryPlaylists playlist={playlist} states={states} chooses={chooses}/>
    </div>
  )
} 

---

import { LibraryButtons } from "./library-buttons";
import { LibraryHeader } from "./library-header";
import { LibraryPlaylists } from "./library-playlists";

export function Library ({playlist}){

  

  return(
    <div className='library'>
      <LibraryHeader />
      <LibraryButtons />
      <LibraryPlaylists playlist={playlist}/>
    </div>
  )
}


Library btn

export function LibraryButtons({states, chooses}){
  return(
    <div className='library-buttons'>
      <button className='playlist-btn' onClick={()=> chooses("playlist")}>
        <span className='playlist-btn-name'>Playlisty</span>
      </button>
      <button className='playlist-btn' onClick={()=> chooses("podcast")}>
        <span className='playlist-btn-name'>Podcasty i programy</span>
      </button>
      <button className='playlist-btn' onClick={()=> chooses("all")}>
      <span className='playlist-btn-name'>Wszystko</span>
      </button>
    </div>
  )
}

----


export function LibraryButtons(){
  return(
    <div className='library-buttons'>
      <button className='playlist-btn'>
        <span className='playlist-btn-name'>Playlisty</span>
      </button>
      <button className='playlist-btn'>
        <span className='playlist-btn-name'>Podcasty i programy</span>
      </button>
      <button className='playlist-btn'>
      <span className='playlist-btn-name'>Wszystko</span>
      </button>
    </div>
  )
}

Library playlist

import favSongs from './favSongs.png'
import { AllPlaylists } from './liberty-all-playlists'
import { LibraryPlaylistSearchbar } from './library-playlist-searchbar'

export function LibraryPlaylists({playlist, states, chooses}){
  
  return(
    <div className='library-playlist'>
      < LibraryPlaylistSearchbar />
      < AllPlaylists playlist={playlist} states={states} chooses={chooses} />
    </div>
  )
}


-----


import favSongs from './favSongs.png'
import { AllPlaylists } from './liberty-all-playlists'
import { LibraryPlaylistSearchbar } from './library-playlist-searchbar'

export function LibraryPlaylists({playlist}){
  
  return(
    <div className='library-playlist'>
      < LibraryPlaylistSearchbar />
      < AllPlaylists playlist={playlist}/>
    </div>
  )
}

AllPlaylists

import favSongs from './favSongs.png'
import { DirectPlaylist } from './liberty-direct-playlist'

export function AllPlaylists({playlist, states, chooses}){
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
        <DirectPlaylist playlist={playlist} states={states} chooses={chooses}/>
      </ul>
    </div>
  )
}

---

import favSongs from './favSongs.png'
import { DirectPlaylist } from './liberty-direct-playlist'

export function AllPlaylists({playlist}){
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
        <DirectPlaylist playlist={playlist}/>
      </ul>
    </div>
  )
}

DirectPlaylist

import favSongs from './favSongs.png'

export function DirectPlaylist({playlist, states, chooses}){
  return(
    <>
    {chooses("podcast")}
    </>
  )
}

--

import favSongs from './favSongs.png'

export function DirectPlaylist({playlist}){
  return(
    playlist.map((data, index) =>
      <a href={data.link}>
        <li key={index} className='direct-playlist'>
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
  )
}





let status = states.all
  
function chooses (value){
  status = states[value]
  return
}