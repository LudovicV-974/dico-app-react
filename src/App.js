import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="app-header">Word Findr</header>
     <Dictionary defaultKeyword = "sunset"/> 
      <footer className="text-center">Coded by Ludovic</footer>
    </div>
  );
}

export default App;