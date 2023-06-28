export function Header({X}){
  return(
    <div className='header'>
        <div className='header-left-section'>. . .</div>
        <div className='header-right-section'>
          <button className='header-right-section-btn'>
            <img className='header-right-section-img' src={X}/>
          </button>
          <button className='header-right-section-btn'>
            <img className='header-right-section-img' src={X}/>
          </button>
          <button className='header-right-section-btn header-right-section-btn-close'>
            <img className='header-right-section-img' src={X}/>
          </button>
        </div>
      </div>
  )
}