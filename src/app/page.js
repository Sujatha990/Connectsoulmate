import 'bootstrap/dist/css/bootstrap.css';
import Side from './Side';
import About from './About';
import SucessStories from './SucessStories';
import Footer from "./Footer";
import Register from './Register';
import Upgrade from './Upgrade';
import Service from './Service';
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";


export default function Home() {
  return (
    <div>
    <NavBar/>
    <NavBar2/>
    <Side/>
    <About/>
    <Register/>
    <Service/>
    <Upgrade/>
    <SucessStories/>
    <Footer/>
    

    </div>
  );
}
