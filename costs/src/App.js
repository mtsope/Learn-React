import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/home/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/newproject/NewProject'

import './components/Layout/container/Container.module.css'

import Container from './components/Layout/container/Container'
import NavBar from './components/Layout/navbar/NavBar'
import Footer from './components/Layout/footer/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/company" element={<Company/>} />
          <Route exact path="/newproject" element={<NewProject/>} />   
        </Routes>  
      </Container>
      <Footer />
    </Router>
    
  );
}
export default App;
