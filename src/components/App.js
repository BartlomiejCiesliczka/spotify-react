import '../App.css';
import X from '../assets/X.png'
import rave from '../assets/rave.jpg'
import running from '../assets/running.jpg'
import lata from '../assets/lata.jpg'
import ross from '../assets/ross.jpg'
import kry from '../assets/kry.jpg'
import dz from '../assets/dz.jpg'
import Coding from '../assets/Coding.jpg'
import BPF1 from '../assets/BPF1.jpg'
import DM1 from '../assets/DM1.jpg'
import DM4 from '../assets/DM4.jpg'
import DM2 from '../assets/DM2.jpg'
import DM6 from '../assets/DM6.jpg'
import DM5 from '../assets/DM5.jpg'
import DM3 from '../assets/DM3.jpg'
import impon from '../assets/impon.jpg'
import LKP from '../assets/LKP.jpg'
import { SidebarRight } from './RightSection/sidebarRight';
import { Center } from './Center/center';
import { Header } from './header';
import { SidebarLeft } from './LeftSection/sidebarLeft';
import { useState } from 'react';

function App() {

  const [playlist, setPlaylist] = useState([
    {
      image: lata,
      name: 'Lata 2010-2019 - składanka',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1EQqedj0y9Uwvu',
      type: 'Playlist',
      id: crypto.randomUUID()
    },
    {
      image: ross,
      name: 'Raport o stanie świata Dariusza Rosiaka',
      author: 'Dariusz Rosiak',
      link: 'https://open.spotify.com/show/78XFGmDPyfP54jCFno2STm',
      type: 'Podcast',
      id: crypto.randomUUID()
    },
    {
      image: BPF1,
      name: 'Budnik i Pokrzywiński',
      author: 'Budnik i Pokrzywiński',
      link: 'https://open.spotify.com/show/4256eQWtIhdsrhzGZPGutQ',
      type: 'Podcast',
      id: crypto.randomUUID()
    },
    {
      image: DM4,
      name: 'Daily Mix 4',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E35TAO9pWJDPg',
      type: 'DM',
      id: crypto.randomUUID()
    },
    {
      image: DM1,
      name: 'Daily Mix 1',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E37jITIOmwvPg',
      type: 'DM',
      id: crypto.randomUUID()
    },
    {
      image: Coding,
      name: 'Programming Coding Ambient Chill',
      author: 'Spotify',
      link: 'https://open.spotify.com/artist/56SLUPv2SeS4e25kYUPaA4',
      type: 'Playlist',
      id: crypto.randomUUID()
    },
    {
      image: kry,
      name: 'Kryminatorium',
      author: 'Marcin Myszka',
      link: 'https://open.spotify.com/show/4wEuac2C7cpuvy8HBjfvW7',
      type: 'Podcast',
      id: crypto.randomUUID()
    },
    {
      image: dz,
      name: 'Dział zagraniczny',
      author: 'Maciej Okraszewski',
      link: 'https://open.spotify.com/show/7iyTVDyRmiGgNZsnU14dOs',
      type: 'Podcast',
      id: crypto.randomUUID()
    },
    {
      image: impon,
      name: 'Imponderabilia - Karol Paciorek',
      author: 'Karol Paciorek',
      link: 'https://open.spotify.com/show/69vhRrk4LgJ44HLPb6HHp9',
      type: 'Podcast',
      id: crypto.randomUUID()
    },
    {
      image: LKP,
      name: 'Lepszy Klimat',
      author: 'Paulina Górska',
      link: 'https://open.spotify.com/show/5IvMpzuBWnHD7f2OHHm3uD',
      type: 'Podcast',
      id: crypto.randomUUID()
    },
    {
      image: DM2,
      name: 'Daily Mix 2',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E39aNKAqz3BBH',
      type: 'DM',
      id: crypto.randomUUID()
    },
    {
      image: DM3,
      name: 'Daily Mix 3',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E380rw76kNYOT',
      type: 'DM',
      id: crypto.randomUUID()
    },
    {
      image: DM5,
      name: 'Daily Mix 5',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E39q9m64nFF9U',
      type: ['Playlist', 'DM',],
      id: crypto.randomUUID()
    },
    {
      image: DM6,
      name: 'Daily Mix 6',
      author: 'Spotify',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E356SC6LyPRMP', 
      type: 'Playlist',
      type: 'DM',
      id: crypto.randomUUID()
    },
    {
      image: running,
      name: 'RUNNING Music Hits 2023 🏃‍♂️',
      author: 'OneSevenMusic',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E356SC6LyPRMP',
      type: 'Playlist',
      id: crypto.randomUUID()
    },
    {
      image: rave,
      name: 'Kitchen dance party at 23:38',
      author: 'Bartłomiej Cieśliczka',
      link: 'https://open.spotify.com/playlist/37i9dQZF1E356SC6LyPRMP',
      type: 'Playlist',
      id: crypto.randomUUID()
    },
  ])

  function choose(type){
    setPlaylist(currentPlaylist =>{
      return currentPlaylist.filter(item => item.type === type)
    })
  }


  return (
    <div>
      <Header X={X}/>
      <main>
        <SidebarLeft playlist={playlist}/>
        <Center playlist={playlist} />
        <SidebarRight X={X}/>
      </main>
    </div>
  );
}

export default App;


// test