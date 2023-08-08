import logo from './logo.svg';
import './App.css';
import RootLayout from './sidebar/RootLayout';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Hero from "./components/Hero.js"
import Contact from "./components/Contact.js"
import About from "./components/About.js"
function App() {
  return (
   <RootLayout>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </RootLayout> 
  );
}

export default App;
