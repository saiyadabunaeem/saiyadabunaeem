import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Exper from './components/exper/Exper';
import Services from './components/services/Services';
import Port from './components/port/Port';
import Testi from './components/testi/Testi';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
          <Header/>
          <Nav/>
          <About/>
          <Exper/>
          <Services/>
          <Port/>
          <Testi/>
          <Contact/>
          <Footer/>
    </>
  );
}

export default App;
