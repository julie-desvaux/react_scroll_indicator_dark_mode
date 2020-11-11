import './App.css';
import Contenu from './Components/Contenu/Contenu';
import BtnToggle from './Components/BtnToggle/BtnToggle';
import ThemeContextProvider from './Context/ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <BtnToggle />
        <Contenu />
      </ThemeContextProvider>      
    </div>
  );

}

export default App;
