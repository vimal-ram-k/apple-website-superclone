import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import Store from "./pages/store";
import "./custom_style/custom_css.css";
import Root from "./pages/root";
function App() {
  const isMainRoute = window.location.href;
  const show = isMainRoute.includes("/main") ? false : true;

  return (
    <Router>
      {show ? <NavigationBar /> : <></>}
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/store" element={<Store />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
