import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path={routes.home} element={<PostList />}></Route>
          <Route path={routes.posts.create} element={<h1>create</h1>}></Route>
          <Route path="*" element={<>404 Not found</>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
