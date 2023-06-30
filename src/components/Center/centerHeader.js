import ProfilePicture from '../../assets/me.jpg'
import back from '../../assets/back.svg'
import forward from '../../assets/forward.svg'

export function CenterHeader(){
  return(
    <div className='main-viev-header'>
          <header className='main-header'>
            <div className='navi-button'>
              <button className='main-header-btn-left'>
                <img src={back} />
              </button>
              <button className='main-header-btn-left'>
                <img src={forward} />
              </button>
            </div>
            <div className='navi-people'>
              <button className='main-header-btn-right'>O
              </button>
              <button className='main-header-btn-right'>
                <div className='main-header-picture'>
                  <img className='main-header-picture-img' src={ProfilePicture}></img>
                </div>
              </button>
            </div>
          </header>
        </div>
  )
}