export function LastListed({playlist}){
  return(
    playlist.slice(0,6).map((data) =>
      <a href={data.link}>
        <div key={data.id} className='last-playlist'>
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
