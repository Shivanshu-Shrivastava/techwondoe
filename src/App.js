import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Billings from './components/Billings';
import General from './components/General';
import Integrations from './components/Integrations';
import Plan from './components/Plan';
import User from './components/User/User';
function App() {
  return (
    <div className='w-9/12 p-6 m-6 bg-white border border-gray-200 rounded-lg shadow-lg'>
      <h2 className='font-bold text-3xl pb-3'>Company Settings</h2>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}  />
            <Route exact path='/plan' element={<Plan />} />
            <Route exact path='/user' element={<User />} />
            <Route exact path='/general' element={<General />} />
            <Route exact path='/billings' element={<Billings />} />
            <Route exact path='/integrations' element={<Integrations />} />

        </Routes>
      </Router>
    </div>


  );
}

export default App;
