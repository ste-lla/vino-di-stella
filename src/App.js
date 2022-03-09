import { Routes, Route } from "react-router-dom";
import './Styles.css';
import Landing from './components/Landing';
import About from './components/About';
import Home from './components/Home';
import Wine from './components/Wine';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart'

function App() {
  return (
    <div className="">
       <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/wine' element={<Wine/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
