import friend1 from './friend1.jpg'
import friend2 from './friend2.jpg'
import friend3 from './friend3.jpg'
import friend4 from './friend4.jpg'

export  function Frined({ProfilePicture}){

  const persons = [
    {
      imagine: friend1,
      name: `Alfred Einstein`,
      music: `Juicy • Doja Cat`,
      album: `Bitches' back up`,
      time: `2 godz`
    },
    {
      imagine: friend2,
      name: `Ahmed Muzar`,
      music: `Mad Sounds • Arctic Monkey`,
      album: `AM`,
      time: `23 min`
    },
    {
      imagine: friend3,
      name: `Ahmed Muzar`,
      music: `Mad Sounds • Arctic Monkey`,
      album: `AM`,
      time: `23 min`
    },
    {
      imagine: friend4,
      name: `Ahmed Muzar`,
      music: `Mad Sounds • Arctic Monkey`,
      album: `AM`,
      time: `23 min`
    }
  ];
  return(
    persons.map((data, index) =>
      <li key={index} className='friend'>
        <div className='friend-info'>
          <div className='friend-photo'>
            <img src={data.imagine}/>
          </div>
          <div className='friend-activity'>
            <div className='friend-name'>{data.name}</div>
            <div className='friend-music'>{data.music}</div>
            <div className='firend-album'>{data.album}</div>
          </div>
        </div>
        <div className='friend-time'>{data.time}</div>
      </li>
    )
  )
}