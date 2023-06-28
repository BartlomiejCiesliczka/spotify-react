export function Frined({frineds}){
  return(
    frineds.map(friend =>{
      return(
        <li className='friend'>
          <div className='friend-info'>
            <div className='friend-photo'>
              <img src={friend.imagine}/>
            </div>
            <div className='friend-activity'>
              <div className='friend-name'>{friend.name}</div>
              <div className='friend-music'>{friend.music}</div>
              <div className='firend-album'>{friend.album}</div>
            </div>
          </div>
          <div className='friend-time'>{friend.time}</div>
        </li>
      )
    })
  )
}