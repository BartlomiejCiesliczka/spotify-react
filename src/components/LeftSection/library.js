import { useState, useEffect } from "react";
import { LibraryButtons } from "./libraryButtons";
import { LibraryHeader } from "./libraryHeader";
import { LibraryPlaylists } from "./libraryPlaylists";

export function Library ({playlist}){

const [selectedType, setSelectedType] = useState()
const [filteredPlaylist, setFilteredPlaylist] = useState(playlist)


useEffect(() =>{
  if(selectedType){
  setFilteredPlaylist(playlist.filter((data) => data.type === selectedType));
} else{
  setFilteredPlaylist(playlist)}}, [selectedType]);

  return(
    <div className='library'>
      <LibraryHeader />
      <LibraryButtons setSelectedType={setSelectedType}/>
      <LibraryPlaylists filteredPlaylist={filteredPlaylist}/>
    </div>
  )
} 