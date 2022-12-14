import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Organization, Repos, Events, Hooks, Issues, Members, PublicMembers, Navbar, ErrorPage } from './components';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Navbar />
        <div className='app-display'>
          <Routes>
            <Route exact path='/' element={<Organization />} />
            <Route path='/repos' element={<Repos />} />
            <Route path='/events' element={<Events />} />
            <Route path='/hooks' element={<Hooks />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/members' element={<Members />} />
            <Route path='/public-members' element={<PublicMembers />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

