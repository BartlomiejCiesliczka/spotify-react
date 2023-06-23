import { Frined } from './friend';

export function SidebarRight({X, ProfilePicture}) {

  return(
    <nav className='sidebar-right'>
      <div className='sidebar-right-header'>
        <div className='sidebar-right-header-title'>Aktywność znajomych</div>
        <div className='sidebar-right-header-buttons'>
          <button className='sidebar-right-btn'>
            <svg width='16' height='16' viewBox='0 0 16 16'>
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
            </svg>
          </button>
          <button className='sidebar-right-btn close-friendlist-btn'>
            <img src={X}/>
          </button>
        </div>
      </div>
      <ul className='friends-list'>
        <Frined ProfilePicture={ProfilePicture}/>
      </ul>
    </nav>
  );
}