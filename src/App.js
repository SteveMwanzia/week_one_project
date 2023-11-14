import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'
import sedanIcon from './images/icon-sedans.svg'
import suvIcon from './images/icon-suvs.svg'
import luxuryIcon from './images/icon-luxury.svg'

function App() {
  return (
    <div className="App" >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="sedans" >
        <Card logo = {sedanIcon} title = "SEDANS" description = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." label= "Learn More"></Card></div>

      <div className="suvs" >
      <Card  logo = {suvIcon} title = "SUVS" description = "Take an SUV for its spaciuous interior, power, and versatility. Perfect for your next family vacation and off-road adventures." label= "Learn More"></Card>
      </div>

      <div className="luxurys">
      <Card  logo = {luxuryIcon} title = "LUXURY" description = "Cruise in the best car brands witjout the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." label= "Learn More" ></Card>
      </div>

    </div>
  );
}

export default App;
