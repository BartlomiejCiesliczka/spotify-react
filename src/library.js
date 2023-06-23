import { LibraryButtons } from "./library-buttons";
import { LibraryHeader } from "./library-header";
import { LibraryPlaylists } from "./library-playlists";

export function Library (){
  return(
    <div className='library'>
      <LibraryHeader />
      <LibraryButtons />
      <LibraryPlaylists />
    </div>
  )
}