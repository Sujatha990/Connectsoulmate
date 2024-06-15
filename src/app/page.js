import 'bootstrap/dist/css/bootstrap.css';
import Side from './Side';
import About from './About';
import SucessStories from './SucessStories';
import Footer from "./Footer";
import Register from './Register';
import Upgrade from './Upgrade';

export default function Home() {
  return (
    <div>
    
    <Side/>
    <About/>
    <Register/>
    <Upgrade/>
    <SucessStories/>
    <Footer/>
    

    </div>
  );
}
