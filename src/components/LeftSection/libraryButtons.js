export function LibraryButtons({setSelectedType}){
  return(
      <div className='library-buttons'>
        <button className='playlist-btn' onClick={()=> setSelectedType("Playlist")}>
          <span className='playlist-btn-name'>Playlisty</span>
        </button>
        <button className='playlist-btn' onClick={()=> setSelectedType("Podcast")}>
          <span className='playlist-btn-name'>Podcasty i programy</span>
        </button>
        <button className='playlist-btn' onClick={()=> setSelectedType()}>
        <span className='playlist-btn-name'>Wszystko</span>
        </button>
      </div>
  )
}