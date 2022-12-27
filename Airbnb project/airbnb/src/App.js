import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Sports from './images/sports.png'
import WeddingPhoto from './images/wedding-photography.png'
import MountainBike from './images/mountain-bike.png'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card 
        img={Sports}
        rating='5.0'
        reviewCount='6'
        country='USA'
        title='Life lessons with Katie Zaferes'
        price={136}
      />
    </div>
  );
}

export default App;
