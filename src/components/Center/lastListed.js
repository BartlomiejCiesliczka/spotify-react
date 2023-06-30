export function LastListed({data}){
  return(
      <a href={data.link}>
        <div className='last-playlist'>
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
}
