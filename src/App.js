 
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
 
import DetailsProject from './Components/DetailsProject';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div>
       <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutme' element={<About></About>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='/details/:id' element={<DetailsProject></DetailsProject>}></Route>
      </Routes>
       
    </div>
  );
}

export default App;
