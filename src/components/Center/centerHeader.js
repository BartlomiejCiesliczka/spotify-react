import ProfilePicture from '../../assets/me.jpg'

export function CenterHeader(){
  return(
    <div className='main-viev-header'>
          <header className='main-header'>
            <div className='navi-button'>
              <button className='main-header-btn-left'>
                <svg height='16' width='16' viewBox='0 0 16 16'>
                  <path d='M 11.03 0.47 a 0.75 0.75 0 0 1 0 1.06 L 4.56 8 l 6.47 6.47 a 0.75 0.75 0 1 1 -1.06 1.06 L 2.44 8 L 9.97 0.47 a 0.75 0.75 0 0 1 1.06 0 Z'></path>
                </svg>
              </button>
              <button className='main-header-btn-left'>
                <svg height='16' width='16' viewBox='0 0 16 16'>
                  <path d='M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z'></path>
                </svg>
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