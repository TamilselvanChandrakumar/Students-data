import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CreatePost from "./screens/createpost/CreatePost";
import Home from "./screens/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="create" element={<CreatePost></CreatePost>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
