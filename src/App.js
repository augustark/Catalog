import MainList from './components/MainList';
import fakeData from './fakeData'
import useViewport from './customHooks/useViewport'
import useBlur from './customHooks/useBlur'

import './styles/navbar.scss'
import './styles/main.scss'
import Navbar from './components/Navbar';

function App() {
  const { width, breakpoint } = useViewport("1200px")
  const [ open, setOpen, ref ] = useBlur()

  return (
    <div className="app">
      <Navbar/>
      <main className="main">
        <header>
          <div className="search-keyword">
            <input type="text" value="60019533" readOnly/>
          </div>
          <button className="main-button">{"->"}</button>
          <h2 onClick={() => setOpen(!open)}>Filters</h2>
        </header>
        <section className={open ? 'filter-on' : ''}>
          <MainList data={fakeData}/>  
          { (open || width >= breakpoint) && (
            <div className='filter' ref={ref}>
              <div className="filter-category">
                <h4>Branches</h4>
                <label><input type="radio" value="All" name="branches"/> All</label>
                <label><input type="radio" value="Current" name="branches"/> Current</label>
                <label><input type="radio" value="Specific selection" name="branches"/> Specific selection</label>
              </div>
              <div className="filter-category">
                <h4>Brand</h4>
                <label><input type="radio" value="All" name="brand"/> All</label>
                <label><input type="radio" value="Specific selection" name="brand"/> Specific selection</label>
              </div>
              <div className="filter-category">
                <h4>Search in</h4>
                <label><input type="checkbox"/> Marchant Part Number</label>
                <label><input type="checkbox"/> Branch Part Number</label>
                <label><input type="checkbox"/> Designation</label>
                <label><input type="checkbox"/> Attributes</label>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
