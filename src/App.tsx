import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigation";
import "./custom_style/custom_css.css";
import Root from "./pages/root";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <Root />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
