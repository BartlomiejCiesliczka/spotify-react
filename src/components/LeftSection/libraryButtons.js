export function LibraryButtons({states, chooses, refreshPage}){
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
        <button className='playlist-btn' onClick={()=> refreshPage()}>
        <span className='playlist-btn-name'>odswiez</span>
        </button>
      </div>
  )
}