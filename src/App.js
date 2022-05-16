import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MyCart from './pages/MyCart';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
            <Navigationbar />
            <div className="min-h-screen">
              <Routes>
                <Route path="/" >
                  <Route index element={<Home />} />
                  <Route path="favorites" element={<Favorites />} />
                  <Route path="mycart" element={<MyCart />} />

                </Route>
              </Routes>
            </div>
            <Footer/>
        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
