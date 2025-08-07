
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services';
import Education from './Components/Education';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
       <Home/>
       <About/>      
       <Education/>
       <Services/>
       <Portfolio/>
      <Contact/>
      <Footer/>
     <Routes>
      <Route path='/' element={<h1></h1>}/>
      <Route path='/Home' element={<h1>hi</h1>}/>
      <Route path='/About' element={<h1>Women</h1>}/>
      <Route path='/Kids' element={<h1>Kids</h1>}/>
      <Route path='/Beauty' element={<h1>Beauty</h1>}/>
      <Route path='/Home' element={<h1> Home & Kitchen</h1>}/>
      <Route path='*' element={<h1>Error 404 Page not Found</h1>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
export default App