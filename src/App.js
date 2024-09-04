import "./App.css";
import Main from "./components/MainPage/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
