
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Home from './Pages/Home.js';
import Services from './Pages/Services.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const  App= ()=> {
  return (
    //home page responsive done
    // about us responsive done
    // contact us responsive done

    //navbar done , responisve done
    // services all done
    // footer done
   
  <BrowserRouter>
      <Header/>
      <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          
      </Routes>
      <Footer/>
  </BrowserRouter>
       
  );
}

export default App;

