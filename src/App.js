import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  document.body.style.backgroundColor = "white"
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
