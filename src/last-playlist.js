export function LastPlaylist({playlist}){
  return(
    playlist.filter((item, index) => index < 6).map((data, index) =>
      <a href={data.link}>
        <div key={index} className='last-playlist'>
          <div className='playlist-photo'>
            <img className='playlist-img' src={data.image}/>
          </div>
          <div className='playlist-text'>
            <div className='playlist-text-layout'>
              <p className='playlist-name'>
                {data.name}
              </p>
            </div>
          </div>
        </div>
      </a>
    )
  )
}