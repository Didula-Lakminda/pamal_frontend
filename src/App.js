import Sidebar from "./components/Sidebar";
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Home />
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
