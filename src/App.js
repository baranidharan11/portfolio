import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./pages.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contacts from "./pages/Contacts";
import Sidenvbar from "./components/Sidenvbar";
function App() {
  return (
    <Router>
      <Sidenvbar />
      <Switch>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/careers" Component={Careers} />
        <Route path="/contacts" Component={Contacts} />

        <Route Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
