import { Outlet } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'


function App() {

  return (
    <div className="App">
      <div>
        <div className='bg-neutral h-screen w-1/4 fixed top-0 left-0'>
          <Nav />
        </div>
        <div className='w-3/4 ml-auto p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App;
