export function DirectPlaylist({data}){
  return(
        <a href={data.link}>
          <li className='direct-playlist'>
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
}