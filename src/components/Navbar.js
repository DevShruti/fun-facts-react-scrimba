import '../App.css';
import images from '../react-logo.png'

export default function Navbar(){
return (<nav>
    <img src={images} alt="images" width="40px" />
    <h1>Fun facts about React</h1>
</nav>
);       
}