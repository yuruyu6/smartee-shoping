import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <HashRouter>
        <Header />
        <MainSection />
      </HashRouter>
    </div>
  );
}

export default App;
