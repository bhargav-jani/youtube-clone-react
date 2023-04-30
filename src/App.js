import './App.css';
import Layout from './Layout';
import Navbar from './components/Navbar';
import WatchPage from './pages/WatchPage';
import { Provider } from 'react-redux';
import store from './utils/store';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='watch' element={<WatchPage />} />
            </Route>
          </Routes>
    </Provider>
  );
}

export default App;
