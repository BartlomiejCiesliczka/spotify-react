import { CenterHeader } from './center-header'
import { LastPlaylists } from './last-playlists'
import { Podcast } from './podcast'
import { DailyMix } from './daily-mix'

export function Center({playlist}){

  return(
    <nav className='center'>
      <div className='main-view-container'>
        <CenterHeader />
        <div className='main-playlists'>
          <div className='main-gradient'></div>
          <LastPlaylists playlist={playlist}/>
          <Podcast playlist={playlist}/>
          <DailyMix playlist={playlist}/>
        </div>
      </div>
    </nav>
  )
}