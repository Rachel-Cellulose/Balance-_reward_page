import "./App.css";
import Main from "./components/MainPage/Main";
import Sidebar from "./components/Sidebar";
import Coupon from "./components/Coupon/Coupon";

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <Sidebar />
        <Main />
        <Coupon />
      </div>
    </div>
  );
}

export default App;
