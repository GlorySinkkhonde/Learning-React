import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Data from './data'

function App() {

  const cards = Data.map(item =>{
    return(
      <Card className='Cardsss'
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
     />
    )
  })

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
