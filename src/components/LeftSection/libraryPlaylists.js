import { AllPlaylists } from './allPlaylists'
import { LibraryPlaylistSearchbar } from './libraryPlaylistSearchbar'

export function LibraryPlaylists({playlist, states, chooses, status}){

  return(
    <div className='library-playlist'>
      < LibraryPlaylistSearchbar />
      < AllPlaylists playlist={playlist} states={states} chooses={chooses} status={status}/>
    </div>
  )
}