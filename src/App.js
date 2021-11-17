import "./App.css";
import Navbar from "./components/header/Navbar";
import MainPage from "./components/mainpage/MainPage";
import Methode from "./components/methode/Methode";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Methode />
    </div>
  );
}

export default App;
