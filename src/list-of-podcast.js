export function ListOfPodcast({playlist}){
  return(
    playlist.filter((item) => item.type === 'Podcast').slice(0,5).map((data, index)=>
      <a href={data.link}>
        <div key={index} className='random-playlist-playlist'>
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
  )
}
