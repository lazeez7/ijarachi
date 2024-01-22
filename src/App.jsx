// import Navbar from './components/Navbar/Navbar'
import './App.css';
import Ad from './components/Ad/Ad';
import Image from './components/Imagee/Image'
// import Header from './components/Header/Header';
// import Ijarachi from './components/Ijarachi/Ijarachi';
// import Slider from './components/Slider/Slider'
import CardBlock from './components/Card_Block/CardBlock'
import SimilarProduct from './components/SimilarProduct/SimilarProduct';






function App() {
  return (
    <>
    <CardBlock/>
    <SimilarProduct/>
    <Ad/>
    <Image/>
    {/* <Header/>
    <Ijarachi/>
    <Navbar/>
    <Slider/> */}
    </>
  );
}

export default App;
