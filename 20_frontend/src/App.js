import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './component/Header';
import { Sidebar } from './component/Sidebar';
import { TopPage } from './component/TopPage';
import { ViewPage } from './component/ViewPage';
import { RegisterPage } from './component/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='header'>
          <Header />
        </div>
        <div className='main'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='content'>
            <Routes>
              <Route exact path="/top" element={<TopPage />} />
              <Route exact path="/view" element={<ViewPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
