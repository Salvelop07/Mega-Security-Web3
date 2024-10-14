import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="min-h-screen">
      <header className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </header>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
