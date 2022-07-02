import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/statement" element={<List />} />
            <Route path="/products" element={<List/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
