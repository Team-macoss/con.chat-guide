import { Routes, Route } from 'react-router-dom';

import Intro from './pages/Intro';
import Guides from './pages/Guides';
import Tutorial from './pages/Tutorial';

import './styles/fonts.scss';
import './styles/global.scss';
import './styles/variables.scss';

function App() {
  return (
    <div className="wrap">
      <header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
