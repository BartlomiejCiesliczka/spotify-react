import './../../style/rightSection.css'
import friend1 from '../../assets/friend1.jpg'
import friend2 from '../../assets/friend2.jpg'
import friend3 from '../../assets/friend3.jpg'
import friend4 from '../../assets/friend4.jpg'
import plus from './../../assets/plus.svg'
import { Frined } from './friend';
import { useState } from "react"

export function SidebarRight({X}) {

  const [frineds, setFrineds] = useState([{
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
  }])
  const [newItem, setNewItem] = useState('')

  function addFrined(name){
    setFrineds(currentFriends =>{
      return [
        ...currentFriends,
        {name},
      ]
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    if(newItem === ''){
      return
    }
    addFrined(newItem)

    setNewItem('')
  }

  return(
    <nav className='sidebar-right'>
      <div className='sidebar-right-header'>
        <div className='sidebar-right-header-title'>Aktywność znajomych</div>
        <div className='sidebar-right-header-buttons'>
          <button className='sidebar-right-btn'>
          <img src={plus} />
          </button>
          <button className='sidebar-right-btn close-friendlist-btn'>
            <img src={X}/>
          </button>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="new-item-form">
          <div className="form-row">
            <label htmlFor="item"></label>
            <input 
              value={newItem}
              onChange={e => setNewItem(e.target.value)} 
              type='text' 
              id="item">
            </input>
          </div>
          <button className="btn">Add</button>
        </form>
      </div>
      <ul className='friends-list'>
        <Frined frineds={frineds} />
      </ul>
    </nav>
  );
}