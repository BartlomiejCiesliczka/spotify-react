import { Library } from "./library";
import { Navibar } from "./sidebar-left-navi";

export function SidebarLeft(){
  return(
    <nav className='sidebar-left'>
      <Navibar />
      <Library />
    </nav>
  )
}