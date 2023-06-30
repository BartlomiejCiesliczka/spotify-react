import './../../style/leftSection.css'
import { Library } from "./library";
import { Navibar } from "./navibar";

export function SidebarLeft({playlist}){
  return(
    <nav className='sidebar-left'>
      <Navibar />
      <Library playlist={playlist}/>
    </nav>
  )
}