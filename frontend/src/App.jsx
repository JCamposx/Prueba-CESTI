import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import EditPost from "./pages/EditPost";
import { routes, url } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={routes.home} element={<Home />}></Route>
          <Route path={routes.posts.create} element={<CreatePost />}></Route>
          <Route path={url(routes.posts.edit)} element={<EditPost />}></Route>
          <Route path="*" element={<>404 Not found</>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
