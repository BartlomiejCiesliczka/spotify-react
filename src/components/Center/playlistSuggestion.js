export function PlaylistSuggestion({data}){
  return(
    <a href={data.link}>
      <div className='random-playlist-playlist'>
        <div className='random-playlist-img'>
          <img src={data.image}></img>
        </div>
        <div className='random-playlist-text'>
          <div className='random-playlist-text-name'>
            {data.name}
          </div>
          <div className='random-playlist-text-author'>
            {data.author}
          </div>
        </div>
      </div>
    </a>
  )
}
