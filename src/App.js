import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home.jsx";
import Market from "./Market.jsx";
import Indices from "./Indices.jsx";
import News from "./News.jsx";
import Tools from "./Tools.jsx";
import Invest from "./Invest.jsx";
import Budget from "./Budget.jsx";
import Retire from "./Retire.jsx";
import Academy from "./Academy.jsx";

function App() {
  return (
    <Router>
      <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/market"
            element={<Market />}
          />
          <Route
            path="/news"
            element={<News />}
          />
          <Route
            path="/Academy"
            element={<Academy />}
          />
          <Route
            path="/tools"
            element={<Tools />}
          />
          <Route
            path="/tools/invest"
            element={<Invest />}
          />
          <Route
            path="/tools/budget"
            element={<Budget />}
          />
          <Route
            path="/tools/retire"
            element={<Retire />}
          />
          <Route
            path="/market/indices"
            element={<Indices />}
          />
      </Routes>
    </Router>
  );
}

export default App;
