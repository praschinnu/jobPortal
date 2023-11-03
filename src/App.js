import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './pages/Home';
import './bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}>
        
      </Route>
      <Route path='/home' element={<Home></Home>}>

      </Route>
     
     </Routes>

        <Footer></Footer>
    </div>
  );
}

export default App;
