import './App.css';
import X from './X.png'
import favSongs from './favSongs.png'
import rave from './rave.jpg'
import running from './running.jpg'

import lata from './lata.jpg'
import ross from './ross.jpg'
import kry from './kry.jpg'
import dz from './dz.jpg'
import Coding from './Coding.jpg'
import BPF1 from './BPF1.jpg'
import DM1 from './DM1.jpg'
import DM4 from './DM4.jpg'
import DM2 from './DM2.jpg'
import DM6 from './DM6.jpg'
import DM5 from './DM5.jpg'
import DM3 from './DM3.jpg'
import impon from './impon.jpg'
import LKP from './LKP.jpg'
import { SidebarRight } from './sidebar-right';
import { Center } from './center';
import { Header } from './header';
import { SidebarLeft } from './sidebar-left';

function App() {

  const playlist = [
    {
      image: lata,
      name: 'Lata 2010-2019 - składanka',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1EQqedj0y9Uwvu',
      type: 'Playlsit'
    },
    {
      image: ross,
      name: 'Raport o stanie świata Dariusza Rosiaka',
      author: 'Dariusz Rosiak',
      link: 'https://open.spotify.com/show/78XFGmDPyfP54jCFno2STm',
      type: 'Podcast',
    },
    {
      image: BPF1,
      name: 'Budnik i Pokrzywiński',
      author: 'Budnik i Pokrzywiński',
      link: 'https://open.spotify.com/show/4256eQWtIhdsrhzGZPGutQ',
      type: 'Podcast',
    },
    {
      image: DM4,
      name: 'Daily Mix 4',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E35TAO9pWJDPg',
      type: 'DM',
    },
    {
      image: DM1,
      name: 'Daily Mix 1',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E37jITIOmwvPg',
      type: 'DM',
    },
    {
      image: Coding,
      name: 'Programming Coding Ambient Chill',
      author: 'Spotify',
      link: 'https://open.spotify.com/artist/56SLUPv2SeS4e25kYUPaA4',
      type: 'Playlsit',
    },
    {
      image: kry,
      name: 'Kryminatorium',
      author: 'Marcin Myszka',
      link: 'https://open.spotify.com/show/4wEuac2C7cpuvy8HBjfvW7',
      type: 'Podcast',
    },
    {
      image: dz,
      name: 'Dział zagraniczny',
      author: 'Maciej Okraszewski',
      link: 'https://open.spotify.com/show/7iyTVDyRmiGgNZsnU14dOs',
      type: 'Podcast',
    },
    {
      image: impon,
      name: 'Imponderabilia - Karol Paciorek',
      author: 'Karol Paciorek',
      link: 'https://open.spotify.com/show/69vhRrk4LgJ44HLPb6HHp9',
      type: 'Podcast',
    },
    {
      image: LKP,
      name: 'Lepszy Klimat',
      author: 'Paulina Górska',
      link: 'https://open.spotify.com/show/5IvMpzuBWnHD7f2OHHm3uD',
      type: 'Podcast',
    },
    {
      image: DM2,
      name: 'Daily Mix 2',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E39aNKAqz3BBH',
      type: 'DM',
    },
    {
      image: DM3,
      name: 'Daily Mix 3',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E380rw76kNYOT',
      type: 'DM',
    },
    {
      image: DM5,
      name: 'Daily Mix 5',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E39q9m64nFF9U',
      type: 'DM',
    },
    {
      image: DM6,
      name: 'Daily Mix 6',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E356SC6LyPRMP',
      type: 'DM',
    },
    {
      image: running,
      name: 'RUNNING Music Hits 2023 🏃‍♂️',
      author: 'OneSevenMusic',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E356SC6LyPRMP',
      type: 'Playlist',
    },
    {
      image: rave,
      name: 'Kitchen dance party at 23:38',
      author: 'Bartłomiej Cieśliczka',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E356SC6LyPRMP',
      type: 'Playlist',
    },
  ]

  return (
    <div className='all'>
      <Header X={X}/>
      <main>
        <SidebarLeft />
        <Center playlist={playlist} />
        <SidebarRight X={X}/>
      </main>
    </div>
  );
}

export default App;
