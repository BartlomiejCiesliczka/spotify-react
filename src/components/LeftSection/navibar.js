import home from './../../assets/home.svg'
import magnifier24 from './../../assets/magnifier24.svg'

export function Navibar(){
  return(
    <div className='navi-bar'>
      <ul className='navi-bar-ul'>
        <li className='home navi-bar-li'>
          <img src={home} />
          <span>Home</span>
        </li>
        <li className='search navi-bar-li'>
          <img src={magnifier24}/>
          <span>Szukaj</span>
        </li>
      </ul>
    </div>
  )
}