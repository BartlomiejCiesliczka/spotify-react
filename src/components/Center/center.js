import { CenterHeader } from './centerHeader'
import { LastPlaylists } from './lastPlaylists'
import { Podcast } from './podcast'
import { DailyMix } from './dailyMix'

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