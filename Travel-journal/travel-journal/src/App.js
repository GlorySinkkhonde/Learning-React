import './App.css';
import Header from './Components/Header';
import Entries from './Components/Entries'
import Data from './data'

function App() {

  const EntryElements = Data.map (item =>{
    return(
      <Entries 
       {...item}
      /*
         {key={item.id}
         title={item.title}
         img={item.img}
         location={item.location}
         link={item.link}
         date={item.date}
         description={item.description}}*/
      />
    )

  })
  return (
    <div>
      <Header />
      {EntryElements}
    </div>
  );
}

export default App;
