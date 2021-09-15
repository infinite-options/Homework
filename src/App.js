import './App.css';
import Container from '../src/Home/Container/Container'
import Suppliers from '../src/Home/Suppliers/Suppliers'
import Footer from './Home/Footer/Footer';
function App() {
  return (
    <div >
      <div className="App">
        <Suppliers />
        <Container />
      </div>
      <Footer />
    </div>

  );
}

export default App;
