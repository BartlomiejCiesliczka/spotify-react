import library from './../../assets/library.svg'
import plus from './../../assets/plus.svg'
import rightArrow from './../../assets/rightArrow.svg'

export function LibraryHeader(){
  return(
    <header className='library-header'>
      <button className='library-header-left-btn'>
        <img className='library-svg' src={library} /> 
        <div className='library-name'>Biblioteka</div>
      </button>
      <div className='library-header-right'>
        <button className='library-btn'>
          <img src={plus}/>
        </button>
        <button className='library-btn'>
          <img src={rightArrow} />
        </button>
      </div>
    </header>
  )
}