import 'bootstrap/dist/css/bootstrap.css';
import Side from './Side';
import About from './About';
import SucessStories from './SucessStories';
import Footer from "./Footer";
import Register from './Register';
import Upgrade from './Upgrade';
import Service from './Service';

export default function Home() {
  return (
    <div>
    
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
