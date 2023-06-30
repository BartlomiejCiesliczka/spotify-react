import { AllPlaylists } from './allPlaylists'
import { LibraryPlaylistSearchbar } from './libraryPlaylistSearchbar'

export function LibraryPlaylists({filteredPlaylist}){

  return(
    <div className='library-playlist'>
      <LibraryPlaylistSearchbar />
      <AllPlaylists filteredPlaylist={filteredPlaylist}/>
    </div>
  )
}