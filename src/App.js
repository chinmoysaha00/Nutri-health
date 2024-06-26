import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  document.body.style.backgroundColor = "black"
  return (
    <div className="App">
      <Navbar />
      <Alert alert={alert}/>
      <Main showAlert={showAlert} />
      <Footer />
    </div>
  );
}

export default App;
